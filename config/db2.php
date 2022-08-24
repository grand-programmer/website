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
    'host' => '192.168.12.144',
    'username' => 'SURAT',
    'password' => 's12345',
    'database' => 'S06271bt',
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
        'QUERYTIMEOUT' => 1,
        'DefaultPkgLibrary' => 'QGPL',
        'DefaultPackage' => 'A /DEFAULT(IBM),2,0,1,0',
        'ExtendedDynamic' => 0,
        'QAQQINILibrary' => '',
        'SQDIAGCODE' => '',
        'LANGUAGEID' => 'ENU',
        'SORTTABLE' => '',
        'SortSequence' => 0,
        'SORTWEIGHT' => 0,
        'AllowUnsupportedChar' => 0,
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
$databaseconfigEA['host']='192.168.212.99';
$databaseconfigEA['schema']='E_ARXIV';
$databaseconfigEA['database']='B2035C4W';
$databaseconfigEA['username']='trarxiv';
$databaseconfigEA['password']='trarxiv';



$databaseconfigSTAT=$databaseconfig;
$databaseconfigSTAT['host']='192.168.12.144';
$databaseconfigSTAT['schema']='TST_STAT';
$databaseconfigSTAT['database']='S06271bt';
$databaseconfigSTAT['username']='SURAT';
$databaseconfigSTAT['password']='s12345';


$databaseconfigINN=$databaseconfig;
$databaseconfigINN['host']='192.168.212.99';
$databaseconfigINN['schema']='GNK_NEW';
$databaseconfigINN['database']='B2035C4W';
$databaseconfigINN['username']='trarxiv';
$databaseconfigINN['password']='trarxiv';

$databaseconfig221=$databaseconfig;
$databaseconfig221['host']='192.168.212.221';
$databaseconfig221['schema']='CONTROL';
$databaseconfig221['database']='S0601A6T';
$databaseconfig221['username']='Kamol';
$databaseconfig221['password']='55788204';

$databaseconfig228=$databaseconfig;
$databaseconfig228['host']='192.168.212.228';
$databaseconfig228['schema']='CONTROL';
$databaseconfig228['database']='S0601A6T';
$databaseconfig228['username']='Kamol';
$databaseconfig228['password']='55788204';

return [

    'connections' => [

        'db2_odbc' => $databaseconfig,
        'db2_odbcEA' => $databaseconfigEA,
        'db2_odbcInn' => $databaseconfigINN,
        'db2_odbc221' => $databaseconfig221,
        'db2_odbc_stat' => $databaseconfigSTAT,

    ],

];
