<?php

namespace App\Exports;

use App\Helpers\MainHelper;
use App\Services\StatService;
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
use PhpOffice\PhpSpreadsheet\RichText\RichText;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

class StatProductsExport implements WithEvents, WithCustomStartCell, FromCollection, ShouldAutoSize, WithColumnWidths
{
    use Exportable;

    public $title;
    public $category;
    public $year;
    public $month;
    public $toMonth;
    public $myarray=[];
    public $service;
    public $highestRow;
    public $data;
    public $headers;
    public $heads = [
        "category" => ["label" => "Товар", "column" => "category", "width" => 50],
        "titleuz" => ["label" => "Ўлчов бирлиги", "column" => "titleuz", "width" => 50],
        "titleoz" => ["label" => "Ўлчов бирлиги", "column" => "titleoz", "width" => 50],
        "titleru" => ["label" => "Ўлчов бирлиги", "column" => "titleru", "width" => 50],
        "titleen" => ["label" => "Ўлчов бирлиги", "column" => "titleen", "width" => 50],
        "unituz" => ["label" => "Ўлчов бирлиги", "column" => "unituz", "width" => 10],
        "unitoz" => ["label" => "Ўлчов бирлиги", "column" => "unitoz", "width" => 8],
        "unitru" => ["label" => "Ўлчов бирлиги", "column" => "unitru", "width" => 8],
        "uniten" => ["label" => "Ўлчов бирлиги", "column" => "uniten", "width" => 8],
        "kol_2023" => ["label" => "миқдори", "column" => "kol_2023", "width" => 15],
        "qiymat_2023" => ["label" => "қиймати", "column" => "qiymat_2023", "width" => 15],
        "kol_2024" => ["label" => "миқдори", "column" => "kol_2024", "width" => 15],
        "qiymat_2024" => ["label" => "қиймати", "column" => "qiymat_2024", "width" => 15],
        // "subItems" => ["label" => "қиймати", "column" => "qiymat_2024", "width" => 100],
    ];


    public function __construct($category, $year,$month,$toMonth=0)
    {
        $this->category = $category;
        $this->year = $year;
        $this->month = $month;
        $this->toMonth = $toMonth;

    }


    public function registerEvents(): array
    {
        return [
            BeforeWriting::class => function (BeforeWriting $event) {
                $templateFile = new LocalTemporaryFile(storage_path('app/public/files/statIstemol.xlsx'));
                $event->writer->reopen($templateFile, Excel::XLSX);
                $sheet = $event->writer->getSheetByIndex(0);
                $this->populateSheet($sheet);


                $event->writer->getSheetByIndex(0)->export($event->getConcernable()); // call the export on the first sheet

                return $event->getWriter()->getSheetByIndex(0);
            },
            AfterSheet::class => function (AfterSheet $event) {
                $objDrawing = new Drawing();
                $objDrawing->setPath(public_path('img/gtk_image.png')); //your image path
                $objDrawing->setCoordinates('A1');
                $objDrawing->setHeight(50);
                $objDrawing->setOffsetY(10);
                $objDrawing->setOffsetX(50);
                $event->sheet->addDrawings($objDrawing);
                $event->sheet->getStyle('A5:F' . (count($this->data) + 4))->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_DASHED,
                            'color' => ['argb' => '000000'],
                        ]
                    ],
                ]);
                $event->sheet->getStyle('A5:F' . (count($this->data) + 4))->applyFromArray([
                    'borders' => [
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_MEDIUM,
                            'color' => ['argb' => '000000'],
                        ]
                    ],
                ]);
                $event->sheet->getStyle('B3:B' . (count($this->data) + 4))->applyFromArray([
                    'borders' => [
                        'left' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                        'right' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ])->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $event->sheet->getStyle('C5:D' . (count($this->data) + 4))->applyFromArray([
                    'borders' => [
                        'left' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                        'right' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);
                $event->sheet->getStyle('A5:F5')->applyFromArray([
                    'font' => [
                        'color' => ['rgb' => 'ea4b5a'],
                        'bold' => true,
                    ],
                ])->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                $event->sheet->getStyle('D5')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $event->sheet->getStyle('F5')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

                if($this->myarray)
                    foreach ($this->myarray as $myCell)
                $event->sheet->getStyle($myCell)->applyFromArray([
                    'font' => [
                        'color' => ['rgb' => '1449a1'],
                        'bold'=>true
                    ],
                ]);
                $date = str_pad(intval($this->month), 2, 0, STR_PAD_LEFT) . '/'. $this->year;
                if($this->toMonth) $date = $date. '-'. str_pad(intval($this->toMonth), 2, 0, STR_PAD_LEFT) . '/'. $this->year;
                $event->sheet->setCellValue('A2',$date)->getStyle('A2')->applyFromArray([
                    'font' => [
                        'color' => ['rgb' => '297dff'],
                        'italic'=>true,
                        'size'=>8
                    ],
                ])->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);

                $event->sheet->setCellValue('A3',MainHelper::translateText('Товар'));
                $event->sheet->setCellValue('B3',MainHelper::translateText('Ўлчов бирлиги'));
                $event->sheet->setCellValue('C3',$this->year - 1 .' '.MainHelper::translateText('йил'));
                $event->sheet->setCellValue('E3',$this->year .' '.MainHelper::translateText('йил'));
                $event->sheet->setCellValue('C4',MainHelper::translateText('миқдори'));
                $objRichText = new RichText();
                $objBold = $objRichText->createTextRun(MainHelper::translateText('қиймати'));
                $objBold->getFont()->setBold(true);
                $objRichText->createText("\n (".MainHelper::translateText('минг долл.').')');
                $event->sheet->setCellValue('D4',$objRichText);
                $event->sheet->setCellValue('E4',MainHelper::translateText('миқдори'));


                $event->sheet->setCellValue('F4',$objRichText);
                $event->sheet->setCellValue('A1',MainHelper::translateText("Истеъмол товарлар импорти тўғрисида маълумот")."\r\n(".$this->title.")" )->getStyle('A1:F1')->applyFromArray(array(
                    'wrapText'	 	=> true
                ));

/*                $event->sheet->getStyle('A6:' . ($this->highestRow . (7 + count($this->data))))->getAlignment()->setHorizontal('center')->setVertical('center')->setWrapText(true);
                $event->sheet->mergeCells('A2:' . ($this->highestRow . 3));
                $event->sheet->mergeCells('A5:' . ($this->highestRow . 5));
                $event->sheet->getStyle('A2:' . ($this->highestRow . 3))->getFill()->applyFromArray(['fillType' => 'solid','rotation' => 0, 'color' => ['rgb' => '39ae69']]);
                $event->sheet->getStyle('A5:' . ($this->highestRow . 5))->getFill()->applyFromArray(['fillType' => 'solid','rotation' => 0, 'color' => ['rgb' => 'b1e1f7']]);
                $event->sheet->getStyle('A2:' . ($this->highestRow . 3))->getAlignment()->setHorizontal('center')->setVertical('center')->setWrapText(true);
                $event->sheet->getStyle('A5:' . ($this->highestRow . 5))->getAlignment()->setHorizontal('center')->setVertical('center')->setWrapText(true);*/

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
        return 'A5';
    }

    public function headings(): array
    {
        $statservice= new StatService(true);
        $categories = $statservice->getIstemolTovarDataNew($this->year,$this->month,0,$this->toMonth)->where('category',$this->category)->values();

        $data = collect();
        $titleuz='title'.app()->getLocale();
        $this->title = $categories[0]->$titleuz;
        $data->push([
            'titleuz'=>MainHelper::translateText('Жами'),
            'unituz'=>'-',
            'kol_2023'=>'-',
            'qiymat_2023'=>number_format((float)$categories[0]->qiymat_2023,1, ',',' '),
            'kol_2024'=>'-',
            'qiymat_2024'=>number_format((float)$categories[0]->qiymat_2024,1, ',',' '),
        ]);
$cat = 5;
        // Kategoriyalarni birin-ketin qo'shing

        foreach (collect((array)$categories[0]->subItems)->sortByDesc('qiymat_2024') as $category) {
            $cat++;
            $category = (array)$category;
            $data->push([
                'titleuz' => $category['title'.app()->getLocale()],
                'unituz' => $category['unit'.app()->getLocale()],
                'kol_2023' =>$category['subProducts']?'':number_format((float)$category['kol_2023'],1, ',',' '),
                'qiymat_2023' =>number_format((float)$category['qiymat_2023'],1, ',',' '),
                'kol_2024' =>$category['subProducts']?'':number_format((float)$category['kol_2024'],1, ',',' '),
                'qiymat_2024' =>number_format((float)$category['qiymat_2024'],1, ',',' '),
            ]);
            if($category['subProducts']) {
                $this->myarray[] = 'A' . $cat . ':F' . $cat;
                foreach (collect($category['subProducts'])->sortByDesc('qiymat_2024') as $product) {

                    $product = (array)$product;
                    if (isset($product['subitemtitleuz'])) {
                        $cat++;
                        $data->push([
                            'category' => "       " . $product['subitemtitle'.app()->getLocale()],
                            'unit' => $product['unit'.app()->getLocale()],
                            'kol_2023' => number_format((float)$product['kol_2023'], 1, ',', ' '),
                            'qiymat_2023' => number_format((float)$product['qiymat_2023'], 1, ',', ' '),
                            'kol_2024' => number_format((float)$product['kol_2024'], 1, ',', ' '),
                            'qiymat_2024' => number_format((float)$product['qiymat_2024'], 1, ',', ' '),
                        ]);
                    }
                }
            }


            // Kategoriyadagi tovarlar miqdorini hisoblash
            /*            $totalQuantity = $category->products->sum('quantity');
                        $data->push([
                            'category' => 'Total',
                            'product' => '',
                            'quantity' => $totalQuantity
                        ]);*/
        }

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
        $this->headings();
        // Barcha kategoriyalarni oling
        /* $categories = $this->data;
 $this->headers = $categories[0];
        $data = collect();

        // Kategoriyalarni birin-ketin qo'shing
        foreach ($categories as $category) {
            $category = (array)$category;
            $data->push([
                'category' => $category['titleuz'],
                'unit' => $category['unituz'],
                'kol_2023' => $category['kol_2023'],
                'qiymat_2023' => $category['qiymat_2023'],
                'kol_2024' => $category['kol_2024'],
                'qiymat_2024' => $category['qiymat_2024'],
            ]);*/

            /*foreach ($category->subItems as $product) {
                $data->push([
                    'category' => $product->titleuz,
                    'unit' => $product->unituz,
                    'kol_2023' => $product->kol_2023,
                    'qiymat_2023' => $product->qiymat_2023,
                    'kol_2024' => $product->kol_2024,
                    'qiymat_2024' => $product->qiymat_2024,
                ]);
            }*/

            // Kategoriyadagi tovarlar miqdorini hisoblash
/*            $totalQuantity = $category->products->sum('quantity');
            $data->push([
                'category' => 'Total',
                'product' => '',
                'quantity' => $totalQuantity
            ]);*/
        //}

        return $this->data;
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
