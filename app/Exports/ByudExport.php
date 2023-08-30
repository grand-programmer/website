<?php

namespace App\Exports;

use App\Models\StatService;
use Carbon\Carbon;
use Carbon\Traits\Date;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\ToArray;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Events\BeforeWriting;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Files\LocalTemporaryFile;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class ByudExport implements WithEvents, WithCustomStartCell, FromCollection, WithHeadings, ShouldAutoSize, WithColumnWidths
{
    use Exportable;

    public $service;
    public $highestRow;
    public $data;
    public $headers;
    public $heads = [
        "id" => ["label" => "ИД", "column" => "", "width" => 10],
        "byud" => ["label" => "БЮД", "column" => "", "width" => 25],
        "rejim" => ["label" => "Режим", "column" => "", "width" => 5],
        "stir_yuk_junatuvchi_qabulqiluvchi" => ["label" => "СТИР, Юк жўнатувчи/Қабул қилувчи", "column" => "", "width" => 10],
        "yuk_junatuvchi" => ["label" => "Юк жўнатувчи", "column" => "", "width" => 50],
        "yuk_qabulqiluvchi" => ["label" => "Юк қабул қилувчи", "column" => "", "width" => 50],
        "shartnoma_tuzuvchi" => ["label" => "Шартнома тузувчи", "column" => "", "width" => 10],
        "shartnoma_tuzuvchi_nomi" => ["label" => "Шартнома тузувчи номи", "column" => "", "width" => 50],
        "valyuta" => ["label" => "Валюта", "column" => "", "width" => 6],
        "faktura" => ["label" => "Фактура", "column" => "", "width" => 12],
        "tovar_raqami" => ["label" => "Товар рақами", "column" => "", "width" => 9],
        "tovar_kodi" => ["label" => "Товар коди", "column" => "", "width" => 20],
        "tovar_nomi" => ["label" => "Товар номи", "column" => "", "width" => 50],
        "vazni_kg" => ["label" => "Вазни, кг", "column" => "", "width" => 15],
        "bojxona_qiymati" => ["label" => "Божхона қиймати", "column" => "", "width" => 15],
        "statistik_qiymati" => ["label" => "Статистик қиймати", "column" => "", "width" => 15],
        "miqdori" => ["label" => "Миқдори", "column" => "", "width" => 8],
        "olchov_birligi" => ["label" => "Ўлчов бирлиги", "column" => "", "width" => 8],
        "shartnoma_raqami_va_sanasi" => ["label" => "Шартнома рақами ва санаси", "column" => "", "width" => 20],
        "idn" => ["label" => "ИДН", "column" => "", "width" => 35],
        "davlat" => ["label" => "Давлат", "column" => "", "width" => 25],
        "rasmiylashtirilgan_sana" => ["label" => "Расмийлаштирилган сана", "column" => "", "width" => 15],
        "g11" => ["label" => "Савдо қилинаётган мамлакат", "column" => "", "width" => 15],
        "g13" => ["label" => "АҚШ доллари курси", "column" => "", "width" => 15],
        "g14" => ["label" => "Декларант/божхона брокери", "column" => "", "width" => 15],
        "g18" => ["label" => "Жўнатиш/етказиб бериш вақтидаги транспорт воситаси", "column" => "", "width" => 15],
        "g20" => ["label" => "Етказиб бериш шартлари", "column" => "", "width" => 15],
        "g21" => ["label" => "Чегарадаги транспорт воситаси", "column" => "", "width" => 15],
        "g23" => ["label" => "Валюта курси", "column" => "", "width" => 15],
        "g24" => ["label" => "Битим хусусияти", "column" => "", "width" => 15],
        "g28" => ["label" => "Молия ва банк маълумотлари", "column" => "", "width" => 15],
        "g34" => ["label" => "Келиб чиқиш мамлакати коди", "column" => "", "width" => 15],
        "g35" => ["label" => "Брутто вазн (кг)", "column" => "", "width" => 15],
        "g37" => ["label" => "Процедура", "column" => "", "width" => 15],
        "g40" => ["label" => "Умумий декларация/аввалги ҳужжат", "column" => "", "width" => 15],
        "g43" => ["label" => "Товар олиб ўтиш мақсади (ўз эҳтиёжи/тижорат)", "column" => "", "width" => 15],
        "g44" => ["label" => "Тақдим этилаётган ҳужжатлар (620, 627, 629 - бандлар)", "column" => "", "width" => 15],
        "g47" => ["label" => "Божхона тўловларининг ҳисоби", "column" => "", "width" => 15],
        "g50" => ["label" => "Ишонч билдирган шахс", "column" => "", "width" => 15],
        "g54" => ["label" => "Жой ва сана ", "column" => "", "width" => 15]
    ];


    public function __construct(StatService $service)
    {
        $this->service = $service;
    }


    public function registerEvents(): array
    {
        return [
            BeforeWriting::class => function (BeforeWriting $event) {
                $templateFile = new LocalTemporaryFile(storage_path('app/public/files/example.xlsx'));
                $event->writer->reopen($templateFile, Excel::XLSX);
                $sheet = $event->writer->getSheetByIndex(0);
                $this->populateSheet($sheet);


                $event->writer->getSheetByIndex(0)->export($event->getConcernable()); // call the export on the first sheet

                return $event->getWriter()->getSheetByIndex(0);
            },
            AfterSheet::class => function (AfterSheet $event) {
                $objDrawing = new Drawing();
                $objDrawing->setPath(public_path('img/gtk_image.png')); //your image path
                $objDrawing->setCoordinates('B2');
                $objDrawing->setHeight(100);
                $objDrawing->setOffsetY(-10);
                $event->sheet->addDrawings($objDrawing);

                $event->sheet->getStyle('A6:' . ($this->highestRow . (7 + count($this->data))))->getAlignment()->setHorizontal('center')->setVertical('center')->setWrapText(true);
                $event->sheet->mergeCells('A2:' . ($this->highestRow . 3));
                $event->sheet->mergeCells('A5:' . ($this->highestRow . 5));
                $event->sheet->getStyle('A2:' . ($this->highestRow . 3))->getFill()->applyFromArray(['fillType' => 'solid','rotation' => 0, 'color' => ['rgb' => '39ae69']]);
                $event->sheet->getStyle('A5:' . ($this->highestRow . 5))->getFill()->applyFromArray(['fillType' => 'solid','rotation' => 0, 'color' => ['rgb' => 'b1e1f7']]);
                $event->sheet->getStyle('A2:' . ($this->highestRow . 3))->getAlignment()->setHorizontal('center')->setVertical('center')->setWrapText(true);
                $event->sheet->getStyle('A5:' . ($this->highestRow . 5))->getAlignment()->setHorizontal('center')->setVertical('center')->setWrapText(true);

                // $event->sheet->getDelegate()->getCell('A7:AG' . count($this->data))->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);

            }
        ];
    }

    private function populateSheet($sheet)
    {

        // Populate the static cells

       // $sheet->setCellValue('J3', Carbon::now()->format('d.m.Y'));
        /*        foreach (array_keys((array)$this->data[0]) as $key=>$col){
                    $sheet->setCellValue('7', Carbon::now()->format('d.m.Y'));

                }*/

        //$sheet->setRow
        //$data= DB::connection('db2_odbc')->select($this->service->getQuery());
        //$sheet->fromArray($data);
        //$sheet->fromArray(DB::connection('db2_odbc')->select($this->service->getQuery()),null, 'A7', true);

    }

    public function startCell(): string
    {
        return 'A7';
    }

    public function headings(): array
    {
        $data = DB::connection('db2_odbc')->select($this->service->getQuery());
        $this->data = $data;
        $headers = array_keys((array)$this->data[0]);
        $this->headers = $headers;
        foreach ($headers as $hKey => $head) {
            $headers[$hKey] = $this->heads[$head]["label"];
        }
        return $headers;
    }


    public function collection()
    {
        $array = collect($this->data)->map(function ($item, $key) {
            $arrayItem=(array)$item;
            $arrayItem['id']=$key + 1;
            return $arrayItem;
        });
        //$array->add(array_keys((array)$data[0]));
        // $keys->merge($array->all());
        return $array;
        //return StatService::all();
        // return collect(DB::connection('db2_odbc')->select($this->service->getQuery()));
        // TODO: Implement collection() method.
    }


    public function columnWidths(): array
    {

        $column_names = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL',
            'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC',
            'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT',
            'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK',
            'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DA', 'DB'
        ];
        $index = 0;
        $highest=0;
        $columnWidths = [];
        foreach ($this->headers as $valHead) {
            $columnWidths[$column_names[$index]] = $this->heads[$valHead]['width'];
            $index++;
        }
        $index--;
        $this->highestRow = $column_names[$index];


        return $columnWidths;


        // TODO: Implement columnWidths() method.
    }
}
