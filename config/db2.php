<?php

/*
|--------------------------------------------------------------------------
| DB2 Config
|--------------------------------------------------------------------------
Valeurs définies pour le niveau d'isolation, pour PDO (mot clé "CMT" ou "CommitMode" dans le DSN) :
0 = Commit immediate (*NONE)
1 = Read committed (*CS)
2 = Read uncommitted (*CHG)
3 = Repeatable read (*ALL)
4 = Serializable (*RR)

* naming:
0 = "sql" (as in schema.table)
1 = "system" (as in schema/table)

* dateFormat:
0 = yy/dd (*JUL)
1 = mm/dd/yy (*MDY)
2 = dd/mm/yy (*DMY)
3 = yy/mm/dd (*YMD)
4 = mm/dd/yyyy (*USA)
5 = yyyy-mm-dd (*ISO)
6 = dd.mm.yyyy (*EUR)
7 = yyyy-mm-dd (*JIS)

* dateSeperator:
0 = "/" (forward slash)
1 = "-" (dash)
2 = "." (period)
3 = "," (comma)
4 = " " (blank)

* decimal:
0 = "." (period)
1 = "," (comma)

* timeFormat:
0 = hh:mm:ss (*HMS)
1 = hh:mm AM/PM (*USA)
2 = hh.mm.ss (*ISO)
3 = hh.mm.ss (*EUR)
4 = hh:mm:ss (*JIS)

* timeSeparator:
0 = ":" (colon)
1 = "." (period)
2 = "," (comma)
3 = " " (blank)

* PDO::ATTR_CASE:
PDO::CASE_LOWER
PDO::CASE_UPPER
PDO::CASE_NATURAL

* PDO::I5_ATTR_DBC_SYS_NAMING
true
false

* PDO::I5_ATTR_COMMIT
PDO::I5_TXN_READ_COMMITTED
PDO::I5_TXN_READ_UNCOMMITTED
PDO::I5_TXN_REPEATABLE_READ
PDO::I5_TXN_SERIALIZABLE
PDO::I5_TXN_NO_COMMIT

* PDO::I5_ATTR_DBC_LIBL
,
* PDO::I5_ATTR_DBC_CURLIB,

*/

$databaseconfig= [
    'driver' => 'db2_ibmi_odbc',
    // or 'db2_ibmi_ibm' / 'db2_zos_odbc' / 'db2_expressc_odbc db2_ibmi_odbc
    'driverName' => '{IBM i Access ODBC Driver}',
    // or '{iSeries Access ODBC Driver}' '{IBM i Access ODBC Driver 64-bit}' / '{IBM i Access ODBC Driver}'
    'host' => 'dc1repl01.db.gtk',
    'username' => 'SURAT',
    'password' => '$UR@Tj0n', //'$UR@Tj0n',
    'database' => 'S06EF21R',
    'prefix' => '',
    'schema' => 'ASOD',
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'port' => 50000,
    'date_format' => 'Y-m-d H:i:s',
    'odbc_keywords' => [
        'SIGNON' => 3,
        'SSL' => 0,
        'CommitMode' => 2,
        'ConnectionType' => 0,
        'DefaultLibraries' => '',
        'Naming' => 0,
        'UNICODESQL' => 0,
        'DateFormat' => 5,
        'DateSeperator' => 0,
        'Decimal' => 0,
        'TimeFormat' => 0,
        'TimeSeparator' => 0,
        'TimestampFormat' => 0,
        'ConvertDateTimeToChar' => 0,
        'BLOCKFETCH' => 1,
        'BlockSizeKB' => 32,
        'AllowDataCompression' => 1,
        'CONCURRENCY' => 0,
        'LAZYCLOSE' => 0,
        'MaxFieldLength' => 15360,
        'PREFETCH' => 0,
        'QUERYTIMEOUT' => 1000,
        'DefaultPkgLibrary' => 'QGPL',
        'DefaultPackage' => 'A /DEFAULT(IBM),2,0,1,0',
        'ExtendedDynamic' => 0,
        'QAQQINILibrary' => '',
        'SQDIAGCODE' => '',
        'LANGUAGEID' => 'ENU',
        'SORTTABLE' => '',
        'SortSequence' => 0,
        'SORTWEIGHT' => 0,
        'AllowUnsupportedChar' => 1,
        'CCSID' => 1208,
        'GRAPHIC' => 0,
        'TRIMCHAR'=>1,
        'ForceTranslation' => 0,
        'ALLOWPROCCALLS' => 0,
        'DB2SQLSTATES' => 0,
        'DEBUG' => 0,
        'TRUEAUTOCOMMIT' => 0,
        'CATALOGOPTIONS' => 3,
        'LibraryView' => 0,
        'ODBCRemarks' => 0,
        'SEARCHPATTERN' => 1,
        'TranslationDLL' => '',
        'TranslationOption' => 0,
        'MAXTRACESIZE' => 0,
        'MultipleTraceFiles' => 1,
        'TRACE' => 0,
        'TRACEFILENAME' => '',
        'ExtendedColInfo' => 0,
    ],
    'options' => [
            PDO::ATTR_CASE => PDO::CASE_LOWER,
            PDO::ATTR_PERSISTENT => false
        ]
        + (defined('PDO::I5_ATTR_DBC_SYS_NAMING') ? [PDO::I5_ATTI5_ATTR_DBC_SYS_NAMINGR_COMMIT => false] : [])
        + (defined('PDO::I5_ATTR_COMMIT') ? [PDO::I5_ATTR_COMMIT => PDO::I5_TXN_NO_COMMIT] : [])
        + (defined('PDO::I5_ATTR_JOB_SORT') ? [PDO::I5_ATTR_JOB_SORT => false] : [])
        + (defined('PDO::I5_ATTR_DBC_LIBL') ? [PDO::I5_ATTR_DBC_LIBL => ''] : [])
        + (defined('PDO::I5_ATTR_DBC_CURLIB') ? [PDO::I5_ATTR_DBC_CURLIB => ''] : []),
    /*           'toolkit' => [
                    'sbmjobParams' => 'ZENDPHP7/ZSVR_JOBD/XTOOLKIT',
                    'XMLServiceLib' => 'ZENDPHP7',
                    'debug' => false,
                    'debugLogFile' => storage_path('logs / toolkit_gigc . log'),
                    'InternalKey' => ' / tmp / ' . 'Toolkit_' . env('APP_ENV') . '_' . random_int(1, 10),
                    'stateless' => false,
                    'plugSize' => '512K',
                    'encoding' => "UTF-8",
                    'ccsidBefore' => "819/1147",
                    'ccsidAfter' => "1147/1208",
                    'useHex' => true
                ], */
];
$databaseconfigEA=$databaseconfig;
$databaseconfigEA['host']='arxiv.db.gtk';
$databaseconfigEA['schema']='E_ARXIV';
$databaseconfigEA['database']='B2035C4W';
$databaseconfigEA['username']='trarxiv';
$databaseconfigEA['password']='trarxiv';



$databaseconfigSTAT=$databaseconfig;
$databaseconfigSTAT['host']='dc1repl01.db.gtk';
$databaseconfigSTAT['schema']='TST_STAT';
$databaseconfigSTAT['database']='B2035C4W';
$databaseconfigSTAT['username']='SURAT';
$databaseconfigSTAT['password']='$UR@Tj0n';


$databaseconfigINN=$databaseconfig;
$databaseconfigINN['host']='mat.db.gtk';
$databaseconfigINN['schema']='GNK_NEW';
$databaseconfigINN['database']='M704BF51';
$databaseconfigINN['username']='SURAT';
$databaseconfigINN['password']='$UR@Tj0n';

$databaseconfig221=$databaseconfig;
$databaseconfig221['host']='192.168.212.221';
$databaseconfig221['schema']='CONTROL';
$databaseconfig221['database']='S0601A6T';
$databaseconfig221['username']='Kamol';
$databaseconfig221['password']='55788204';

$databaseconfig223=$databaseconfig;
$databaseconfigNewStat=$databaseconfig;


$databaseconfig223['host']='192.168.212.223';
$databaseconfig223['schema']='STATPDF';
$databaseconfig223['database']='S0636b7t';
$databaseconfig223['username']='STATSRV';
$databaseconfig223['password']='St@t_$Rv';

$databaseconfigNewStat['host']='ed01.db.gtk';
$databaseconfigNewStat['schema']='STATPDF';
$databaseconfigNewStat['database']='N704BF51';
$databaseconfigNewStat['username']='STATSRV';
$databaseconfigNewStat['password']='St@t_$Rv';

$databaseconfigEd1=$databaseconfig;
$databaseconfigEd1['host']='ed01.db.gtk';
$databaseconfigEd1['schema']='STATPDF';
$databaseconfigEd1['database']='N704BF51';
$databaseconfigEd1['username']='STATSRV';
$databaseconfigEd1['password']='St@t_$Rv';

$databaseconfig228=$databaseconfig;
$databaseconfig228['host']='ed01.db.gtk';
$databaseconfig228['schema']='epigued';
$databaseconfig228['database']='S0601A6T';
$databaseconfig228['username']='Surat';
$databaseconfig228['password']='As123456';

$databaseconfig227=$databaseconfig;
$databaseconfig227['host']='dc1paym01.db.gtk';
$databaseconfig227['schema']='TP';
$databaseconfig227['database']='S2135BFW';
$databaseconfig227['username']='newsite';
$databaseconfig227['password']='new$1te';

$databaseconfig2_10=$databaseconfig;
$databaseconfig2_10['host']='db210.db.gtk';
$databaseconfig2_10['schema']='ELZVK';
$databaseconfig2_10['database']='L704BF41';
$databaseconfig2_10['username']='SURAT';
$databaseconfig2_10['password']='$UR@Tj0n';

$databaseconfig_tsodb=$databaseconfig;
$databaseconfig_tsodb['host']='Tco2mir.db.gtk';
$databaseconfig_tsodb['schema']='YEISVO';
$databaseconfig_tsodb['database']='E704BF51';
$databaseconfig_tsodb['username']='SURAT';
$databaseconfig_tsodb['password']='$UR@Tj0n';

$normaLocation=$databaseconfig;
$normaLocation['host']='norma.db.gtk';
$normaLocation['schema']='DECAPP';
$normaLocation['database']='E704BF51';
$normaLocation['username']='rustam';
$normaLocation['password']='9061648';

$databaseconfig2_10_EISVO=$databaseconfig2_10;
$databaseconfig2_10_EISVO['host']='tco1mir.db.gtk';
$databaseconfig2_10_EISVO['database']='L704BF41';
$databaseconfig2_10_EISVO['username']='YEISVNEW';
$databaseconfig2_10_EISVO['password']='Ye@sV0S1';
$databaseconfig2_10_EISVO['schema']='YEISVO';

$databaseconfig2_10_Tranzit=$databaseconfig2_10;
$databaseconfig2_10_Tranzit['schema']='ETRANZIT';

return [

    'connections' => [

        'db2_odbc' => $databaseconfig,
        'db2_odbcEA' => $databaseconfigEA,
        'db2_odbcInn' => $databaseconfigINN,
        'databaseconfig212_228' => $databaseconfig228,
        'databaseconfig212_227' => $databaseconfig227,
        'db2_odbc221' => $databaseconfig221,
        'db2_odbc223' => $databaseconfig223,
        'db2_odbc_new_stat' => $databaseconfigNewStat,
        'databaseconfigEd1' => $databaseconfigEd1,
        'db2_odbc_stat' => $databaseconfigSTAT,
        'databaseconfig2_10' => $databaseconfig2_10,
        'databaseconfig2_10_EISVO' => $databaseconfig2_10_EISVO,
        'databaseconfig2_10_Tranzit' => $databaseconfig2_10_Tranzit,
        'databaseconfig_tsodb' => $databaseconfig_tsodb,
        'normaLocation' => $normaLocation,

    ],

];
