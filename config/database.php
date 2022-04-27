<?php

use Illuminate\Support\Str;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

    'default' => env('DB_CONNECTION', 'mysql'),

    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the database connections setup for your application.
    | Of course, examples of configuring each database platform that is
    | supported by Laravel is shown below to make development simple.
    |
    |
    | All database work in Laravel is done through the PHP PDO facilities
    | so make sure you have the driver for your particular database of
    | choice installed on your machine before you begin development.
    |
    */

    'connections' => [

        'sqlite' => [
            'driver' => 'sqlite',
            'url' => env('DATABASE_URL'),
            'database' => env('DB_DATABASE', database_path('database.sqlite')),
            'prefix' => '',
            'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
        ],

        'mysql' => [
            'driver' => 'mysql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'lv-loc'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', 'root'),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => null,
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ],

        'pgsql' => [
            'driver' => 'pgsql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '5432'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            'schema' => 'public',
            'sslmode' => 'prefer',
        ],

        'sqlsrv' => [
            'driver' => 'sqlsrv',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '1433'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
        ],
        /*'db2_odbc' => [
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
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'port' => 50000,
            'date_format' => 'Y-m-d H:i:s',
            'CODESET'=>'UTF-8',
            'odbc_keywords' => [

                'SIGNON' => 3,
                'SSL' => 0,
                'CommitMode' => 2,
                'ConnectionType' => 0,
                'DefaultLibraries' => '',
                'Naming' => 0,
                'UNICODESQL' => 0,
                'CODESET'=>'UTF-8',
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
                'CCSID' => 819,
                'GRAPHIC' => 0,
                'TRIMCHAR'=>1,
                'ForceTranslation' => 0,
                'ALLOWPROCCALLS' => 0,
                'DB2SQLSTATES' => 0,
                'DEBUG' => 65536,
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
/*            'toolkit' => [
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
            ],*/
      /*  ],*/

    ],

    /*
    |--------------------------------------------------------------------------
    | Migration Repository Table
    |--------------------------------------------------------------------------
    |
    | This table keeps track of all the migrations that have already run for
    | your application. Using this information, we can determine which of
    | the migrations on disk haven't actually been run in the database.
    |
    */

    'migrations' => 'migrations',

    /*
    |--------------------------------------------------------------------------
    | Redis Databases
    |--------------------------------------------------------------------------
    |
    | Redis is an open source, fast, and advanced key-value store that also
    | provides a richer body of commands than a typical key-value system
    | such as APC or Memcached. Laravel makes it easy to dig right in.
    |
    */

    'redis' => [

        'client' => env('REDIS_CLIENT', 'phpredis'),

        'options' => [
            'cluster' => env('REDIS_CLUSTER', 'redis'),
            'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),
        ],

        'default' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'password' => env('REDIS_PASSWORD', null),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_DB', '0'),
        ],

        'cache' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'password' => env('REDIS_PASSWORD', null),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_CACHE_DB', '1'),
        ],

    ],

];
