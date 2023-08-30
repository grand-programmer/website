<?php

namespace App\Services;
use NotificationChannels\Telegram\TelegramFile;
use Illuminate\Notifications\Notification;

class NewsToSocial extends Notification
{
    public function __construct($news)
    {
        $this->news = $news;
    }

    public function via($notifiable)
    {
        return ["telegram"];
    }
    /**
     * Route notifications for the Telegram channel.
     *
     * @return int
     */
    public function routeNotificationForTelegram()
    {
        return '-1001137582956';
    }
    public function toTelegram($notifiable)
    {
        $url = url('https://customs.uz/news/' . $this->news->slug);
        return TelegramFile::create()
            // Optional recipient user id.
            // ->to($notifiable->telegram_user_id)
            // Markdown supported.
            ->content('*'.$this->news->title . '* '. chr(10) . chr(10) . html_entity_decode(trim(str_replace("&nbsp;", '',strip_tags($this->news->short)))))
            ->file("https://customs.uz/public/storage/uploads/" . $this->news->image, 'photo')
            // ->line($this->news->title)
            // ->line("*Батафсил*")

            // (Optional) Blade template for the content.
            // ->view('notification', ['url' => $url])

            // (Optional) Inline Buttons
            ->button('Батафсил', $url);
    }

}
