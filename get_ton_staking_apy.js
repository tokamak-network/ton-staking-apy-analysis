const fs = require('fs');
const xlsx = require('xlsx');

// Input array
const stakingDayDatas =  [
    {
        "__typename": "StakingDayData",
        "date": 1698105600,
        "id": "19654",
        "totalStaked": "17575976631170856944266661051348200"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698192000,
        "id": "19655",
        "totalStaked": "17487445540960506513983288605702539"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698278400,
        "id": "19656",
        "totalStaked": "17363166425254620197515198827823553"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698364800,
        "id": "19657",
        "totalStaked": "17458979125254620197515198827823553"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698537600,
        "id": "19659",
        "totalStaked": "17471479125254620197515198827823553"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698710400,
        "id": "19661",
        "totalStaked": "17090754577850018283546298372208094"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698796800,
        "id": "19662",
        "totalStaked": "17147176745653402755051882153543836"
    },
    {
        "__typename": "StakingDayData",
        "date": 1698969600,
        "id": "19664",
        "totalStaked": "17142186895653402755051882153543836"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699056000,
        "id": "19665",
        "totalStaked": "17128466956520536905877643971683325"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699142400,
        "id": "19666",
        "totalStaked": "17088764096520536905877643971683325"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699228800,
        "id": "19667",
        "totalStaked": "16729154806520536905877643971683325"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699315200,
        "id": "19668",
        "totalStaked": "16723920742595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699401600,
        "id": "19669",
        "totalStaked": "16623920742595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699488000,
        "id": "19670",
        "totalStaked": "16623916742595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699574400,
        "id": "19671",
        "totalStaked": "16602500572595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699660800,
        "id": "19672",
        "totalStaked": "16660973002595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699747200,
        "id": "19673",
        "totalStaked": "16728801872595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699833600,
        "id": "19674",
        "totalStaked": "16727201872595525401959423702270397"
    },
    {
        "__typename": "StakingDayData",
        "date": 1699920000,
        "id": "19675",
        "totalStaked": "17905672296695049869241692456516076"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700006400,
        "id": "19676",
        "totalStaked": "18006801117205885347815439620586379"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700092800,
        "id": "19677",
        "totalStaked": "18006741288739952934879310243474293"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700179200,
        "id": "19678",
        "totalStaked": "18051388457941624744366365098587665"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700265600,
        "id": "19679",
        "totalStaked": "18030304087344761028852018531257896"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700352000,
        "id": "19680",
        "totalStaked": "18030304087344761028852018531257896"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700438400,
        "id": "19681",
        "totalStaked": "17960270760197757306649124167576082"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700524800,
        "id": "19682",
        "totalStaked": "17959715258999388253576128819227170"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700611200,
        "id": "19683",
        "totalStaked": "18057726718999388253576128819227170"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700697600,
        "id": "19684",
        "totalStaked": "18019756538645648082759543602901471"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700784000,
        "id": "19685",
        "totalStaked": "18020107608645648082759543602901471"
    },
    {
        "__typename": "StakingDayData",
        "date": 1700870400,
        "id": "19686",
        "totalStaked": "18020957338645648082759543602901471"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701043200,
        "id": "19688",
        "totalStaked": "18037113168645648082759543602901471"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701129600,
        "id": "19689",
        "totalStaked": "18053442728645648082759543602901471"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701216000,
        "id": "19690",
        "totalStaked": "18140893866103745995733930856966454"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701302400,
        "id": "19691",
        "totalStaked": "18140893866103745995733930856966454"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701388800,
        "id": "19692",
        "totalStaked": "18131863434896253305346317552810370"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701475200,
        "id": "19693",
        "totalStaked": "18081863434896253305346317552810370"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701734400,
        "id": "19696",
        "totalStaked": "18138380741931518446925842601426666"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701820800,
        "id": "19697",
        "totalStaked": "18138380741931518446925842601426666"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701907200,
        "id": "19698",
        "totalStaked": "18141870162316079702406558817965628"
    },
    {
        "__typename": "StakingDayData",
        "date": 1701993600,
        "id": "19699",
        "totalStaked": "18195573241159113124949136913995763"
    },
    {
        "__typename": "StakingDayData",
        "date": 1702166400,
        "id": "19701",
        "totalStaked": "18193573241159113124949136913995763"
    },
    {
        "__typename": "StakingDayData",
        "date": 1702339200,
        "id": "19703",
        "totalStaked": "18193573241159113124949136913995763"
    },
    {
        "__typename": "StakingDayData",
        "date": 1702684800,
        "id": "19707",
        "totalStaked": "18193573241159113124949136913995763"
    },
    {
        "__typename": "StakingDayData",
        "date": 1702771200,
        "id": "19708",
        "totalStaked": "18244240141159113124949136913995763"
    },
    {
        "__typename": "StakingDayData",
        "date": 1702857600,
        "id": "19709",
        "totalStaked": "18344835052094863209752041832195459"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703116800,
        "id": "19712",
        "totalStaked": "18420688764032788929303517627273833"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703203200,
        "id": "19713",
        "totalStaked": "18413508654032788929303517627273833"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703462400,
        "id": "19716",
        "totalStaked": "18479149933582746527372412271140069"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703548800,
        "id": "19717",
        "totalStaked": "18489284633612757764505462769043666"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703635200,
        "id": "19718",
        "totalStaked": "18404331880433847363427787810521918"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703894400,
        "id": "19721",
        "totalStaked": "18405327160433847363427787810521918"
    },
    {
        "__typename": "StakingDayData",
        "date": 1703980800,
        "id": "19722",
        "totalStaked": "18405627230433847363427787810521918"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704067200,
        "id": "19723",
        "totalStaked": "18405627230433847363427787810521918"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704240000,
        "id": "19725",
        "totalStaked": "18477824453858060782026533205143620"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704499200,
        "id": "19728",
        "totalStaked": "18477824453858060782026533205143620"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704585600,
        "id": "19729",
        "totalStaked": "18486099953858060782026533205143620"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704672000,
        "id": "19730",
        "totalStaked": "18538654476757026090751043183708624"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704844800,
        "id": "19732",
        "totalStaked": "18567000776757026090751043183708624"
    },
    {
        "__typename": "StakingDayData",
        "date": 1704931200,
        "id": "19733",
        "totalStaked": "18583688488515030015122786184195884"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705017600,
        "id": "19734",
        "totalStaked": "18683688488515030015122786184195884"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705363200,
        "id": "19738",
        "totalStaked": "18718931421441901502688246435324415"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705449600,
        "id": "19739",
        "totalStaked": "18718931421441901502688246435324415"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705536000,
        "id": "19740",
        "totalStaked": "18769220889659928194411896397200005"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705622400,
        "id": "19741",
        "totalStaked": "18769485289659928194411896397200005"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705708800,
        "id": "19742",
        "totalStaked": "18761049409477138411731895625695875"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705795200,
        "id": "19743",
        "totalStaked": "18795533433512383941144664781586855"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705881600,
        "id": "19744",
        "totalStaked": "18809226433512383941144664781586855"
    },
    {
        "__typename": "StakingDayData",
        "date": 1705968000,
        "id": "19745",
        "totalStaked": "18746132689725300153639707716086689"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706054400,
        "id": "19746",
        "totalStaked": "18755131689725300153639707716086689"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706313600,
        "id": "19749",
        "totalStaked": "18755131689725300153639707716086689"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706400000,
        "id": "19750",
        "totalStaked": "18755131689725300153639707716086689"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706486400,
        "id": "19751",
        "totalStaked": "18753131689725300153639707716086689"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706572800,
        "id": "19752",
        "totalStaked": "18784069056812459529555070026118511"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706659200,
        "id": "19753",
        "totalStaked": "18860728653404366011551346697246264"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706745600,
        "id": "19754",
        "totalStaked": "18865190734969324065453385846010054"
    },
    {
        "__typename": "StakingDayData",
        "date": 1706832000,
        "id": "19755",
        "totalStaked": "18846002569297263479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707004800,
        "id": "19757",
        "totalStaked": "18846196279297263479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707091200,
        "id": "19758",
        "totalStaked": "18846738889297264479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707177600,
        "id": "19759",
        "totalStaked": "18843362719297264479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707264000,
        "id": "19760",
        "totalStaked": "18843362719297264479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707523200,
        "id": "19763",
        "totalStaked": "18856267959297264479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707609600,
        "id": "19764",
        "totalStaked": "18856267959297264479989052595164933"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707696000,
        "id": "19765",
        "totalStaked": "19076821169157220001555298719069698"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707782400,
        "id": "19766",
        "totalStaked": "19079821169157220001555298719069698"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707868800,
        "id": "19767",
        "totalStaked": "19065279076605748621127039800452330"
    },
    {
        "__typename": "StakingDayData",
        "date": 1707955200,
        "id": "19768",
        "totalStaked": "18865279076605748621127039800452330"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708041600,
        "id": "19769",
        "totalStaked": "18869849066605748621127039800452330"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708128000,
        "id": "19770",
        "totalStaked": "18858607456605748621127039800452330"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708214400,
        "id": "19771",
        "totalStaked": "18909299652061048469993669544017255"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708300800,
        "id": "19772",
        "totalStaked": "18904299652061048469993669544017255"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708387200,
        "id": "19773",
        "totalStaked": "18922289030287641286244599409206743"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708473600,
        "id": "19774",
        "totalStaked": "18918789030287641286244599409206743"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708560000,
        "id": "19775",
        "totalStaked": "18981042972439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1708992000,
        "id": "19780",
        "totalStaked": "18988342972439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1709078400,
        "id": "19781",
        "totalStaked": "19001876872439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1709337600,
        "id": "19784",
        "totalStaked": "19091876872439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1709424000,
        "id": "19785",
        "totalStaked": "19291876872439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1709596800,
        "id": "19787",
        "totalStaked": "19289876872439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1709769600,
        "id": "19789",
        "totalStaked": "19289876872439325205689109288870374"
    },
    {
        "__typename": "StakingDayData",
        "date": 1709942400,
        "id": "19791",
        "totalStaked": "19531155920916577871726688758545905"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710028800,
        "id": "19792",
        "totalStaked": "19429786380916577871726688758545905"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710115200,
        "id": "19793",
        "totalStaked": "19377916488207223943135716287677920"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710201600,
        "id": "19794",
        "totalStaked": "19363371798207223943135716287677920"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710374400,
        "id": "19796",
        "totalStaked": "19362420798207223943135716287677920"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710547200,
        "id": "19798",
        "totalStaked": "19361465198207223943135716287677920"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710633600,
        "id": "19799",
        "totalStaked": "17942709342466228148323119433125721"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710720000,
        "id": "19800",
        "totalStaked": "18014247645568080590874313686847371"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710806400,
        "id": "19801",
        "totalStaked": "18013152645568080590874313686847371"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710892800,
        "id": "19802",
        "totalStaked": "18038333233731113594953141863463773"
    },
    {
        "__typename": "StakingDayData",
        "date": 1710979200,
        "id": "19803",
        "totalStaked": "18034561333731113594953141863463773"
    },
    {
        "__typename": "StakingDayData",
        "date": 1711065600,
        "id": "19804",
        "totalStaked": "18018394680954179013001477169184114"
    },
    {
        "__typename": "StakingDayData",
        "date": 1711152000,
        "id": "19805",
        "totalStaked": "18017933120954179013001477169184114"
    },
    {
        "__typename": "StakingDayData",
        "date": 1711324800,
        "id": "19807",
        "totalStaked": "18018717160954179013001477169184114"
    },
    {
        "__typename": "StakingDayData",
        "date": 1711584000,
        "id": "19810",
        "totalStaked": "18029646690954179013001477169184114"
    },
    {
        "__typename": "StakingDayData",
        "date": 1711756800,
        "id": "19812",
        "totalStaked": "18183785892703440116982670821764438"
    },
    {
        "__typename": "StakingDayData",
        "date": 1711843200,
        "id": "19813",
        "totalStaked": "18183785892703440116982670821764438"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712016000,
        "id": "19815",
        "totalStaked": "18183785892703440116982670821764438"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712102400,
        "id": "19816",
        "totalStaked": "18183785892703440116982670821764438"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712188800,
        "id": "19817",
        "totalStaked": "18232647196131799708579981110833076"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712275200,
        "id": "19818",
        "totalStaked": "18232647196131799708579981110833076"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712361600,
        "id": "19819",
        "totalStaked": "18230650844624394871167621713695630"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712707200,
        "id": "19823",
        "totalStaked": "18252106844624394871167621713695630"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712793600,
        "id": "19824",
        "totalStaked": "18255106844624394871167621713695630"
    },
    {
        "__typename": "StakingDayData",
        "date": 1712966400,
        "id": "19826",
        "totalStaked": "18410305346464490862635739240403161"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713139200,
        "id": "19828",
        "totalStaked": "18409217846464490862635739240403161"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713225600,
        "id": "19829",
        "totalStaked": "18409217846464490862635739240403161"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713484800,
        "id": "19832",
        "totalStaked": "18409217846464490862635739240403161"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713571200,
        "id": "19833",
        "totalStaked": "18409217846464490862635739240403161"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713657600,
        "id": "19834",
        "totalStaked": "18478455574285107205313855540908240"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713744000,
        "id": "19835",
        "totalStaked": "18470290664285107205313855540908240"
    },
    {
        "__typename": "StakingDayData",
        "date": 1713830400,
        "id": "19836",
        "totalStaked": "18478454574285107205313855540908240"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714003200,
        "id": "19838",
        "totalStaked": "18484547514285107205313855540908240"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714089600,
        "id": "19839",
        "totalStaked": "18494547514285107205313855540908240"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714348800,
        "id": "19842",
        "totalStaked": "18495100504285107205313855540908240"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714435200,
        "id": "19843",
        "totalStaked": "18579215082134452735950968235731170"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714521600,
        "id": "19844",
        "totalStaked": "18690725594675818912711369748410205"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714608000,
        "id": "19845",
        "totalStaked": "18705910874675818912711369748410205"
    },
    {
        "__typename": "StakingDayData",
        "date": 1714867200,
        "id": "19848",
        "totalStaked": "18705910874675818912711369748410205"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715126400,
        "id": "19851",
        "totalStaked": "18729706224410939169764886525189703"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715212800,
        "id": "19852",
        "totalStaked": "18716632323409002302430013585286565"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715299200,
        "id": "19853",
        "totalStaked": "18716880763409002302430013585286565"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715644800,
        "id": "19857",
        "totalStaked": "18716880763409002302430013585286565"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715817600,
        "id": "19859",
        "totalStaked": "18802389458760502205963004721756329"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715904000,
        "id": "19860",
        "totalStaked": "18859292699513879497290729817595099"
    },
    {
        "__typename": "StakingDayData",
        "date": 1715990400,
        "id": "19861",
        "totalStaked": "18854301861137024500515671979409833"
    },
    {
        "__typename": "StakingDayData",
        "date": 1716336000,
        "id": "19865",
        "totalStaked": "18852301861137024500515671979409833"
    },
    {
        "__typename": "StakingDayData",
        "date": 1716422400,
        "id": "19866",
        "totalStaked": "18859590901137024500515671979409833"
    },
    {
        "__typename": "StakingDayData",
        "date": 1716854400,
        "id": "19871",
        "totalStaked": "18964119323793964966696793008367522"
    },
    {
        "__typename": "StakingDayData",
        "date": 1716940800,
        "id": "19872",
        "totalStaked": "18975572751920377702254633023511059"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717027200,
        "id": "19873",
        "totalStaked": "18983900571920377702254633023511059"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717113600,
        "id": "19874",
        "totalStaked": "18983900571920377702254633023511059"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717545600,
        "id": "19879",
        "totalStaked": "19006019181920377702254633023511059"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717632000,
        "id": "19880",
        "totalStaked": "19049886321920377702254633023511059"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717718400,
        "id": "19881",
        "totalStaked": "19131274722888716940463998929020002"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717804800,
        "id": "19882",
        "totalStaked": "19131087722888716940463998929020002"
    },
    {
        "__typename": "StakingDayData",
        "date": 1717977600,
        "id": "19884",
        "totalStaked": "19131196072888716940463998929020002"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718064000,
        "id": "19885",
        "totalStaked": "19131196072888716940463998929020002"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718323200,
        "id": "19888",
        "totalStaked": "17359859453842284232505638612526927"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718409600,
        "id": "19889",
        "totalStaked": "17403600648209278069523187335039520"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718496000,
        "id": "19890",
        "totalStaked": "17478566018209278069523187335039520"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718582400,
        "id": "19891",
        "totalStaked": "17633530583267728015670590928395193"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718668800,
        "id": "19892",
        "totalStaked": "17707267040616552220211435748276526"
    },
    {
        "__typename": "StakingDayData",
        "date": 1718755200,
        "id": "19893",
        "totalStaked": "17545268549568153726619805204590046"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719014400,
        "id": "19896",
        "totalStaked": "17547455549568153726619805204590046"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719100800,
        "id": "19897",
        "totalStaked": "17547532035909525659401183619861537"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719273600,
        "id": "19899",
        "totalStaked": "17607532035909525659401183619861537"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719360000,
        "id": "19900",
        "totalStaked": "17610601548170053547995496281916976"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719446400,
        "id": "19901",
        "totalStaked": "17673022148170053547995496281916976"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719532800,
        "id": "19902",
        "totalStaked": "17747905226003009690837169544769666"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719705600,
        "id": "19904",
        "totalStaked": "17406097844281402130658962578778710"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719792000,
        "id": "19905",
        "totalStaked": "17406097844281402130658962578778710"
    },
    {
        "__typename": "StakingDayData",
        "date": 1719878400,
        "id": "19906",
        "totalStaked": "17426070844281402130658962578778710"
    },
    {
        "__typename": "StakingDayData",
        "date": 1720137600,
        "id": "19909",
        "totalStaked": "17433619444281402130658962578778710"
    },
    {
        "__typename": "StakingDayData",
        "date": 1720310400,
        "id": "19911",
        "totalStaked": "17577025604747104396573772860966020"
    },
    {
        "__typename": "StakingDayData",
        "date": 1720483200,
        "id": "19913",
        "totalStaked": "17661959206822621160672877177927479"
    },
    {
        "__typename": "StakingDayData",
        "date": 1720656000,
        "id": "19915",
        "totalStaked": "17668856206822621160672877177927479"
    },
    {
        "__typename": "StakingDayData",
        "date": 1720915200,
        "id": "19918",
        "totalStaked": "18762755676822621160672877177927479"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721001600,
        "id": "19919",
        "totalStaked": "19212844456822621160672877177927479"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721088000,
        "id": "19920",
        "totalStaked": "19152844456822621160672877177927479"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721174400,
        "id": "19921",
        "totalStaked": "19172500456822621160672877177927479"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721260800,
        "id": "19922",
        "totalStaked": "19040730622793719301120268710465380"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721433600,
        "id": "19924",
        "totalStaked": "19361030622793719301120268710465380"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721520000,
        "id": "19925",
        "totalStaked": "19455835020509748983027354050539202"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721606400,
        "id": "19926",
        "totalStaked": "19657160610509748983027354050539202"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721692800,
        "id": "19927",
        "totalStaked": "19668410610509748983027354050539202"
    },
    {
        "__typename": "StakingDayData",
        "date": 1721952000,
        "id": "19930",
        "totalStaked": "19671666480509748983027354050539202"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722038400,
        "id": "19931",
        "totalStaked": "19671496760509748983027354050539202"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722124800,
        "id": "19932",
        "totalStaked": "19663098760509748983027354050539202"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722211200,
        "id": "19933",
        "totalStaked": "19710902219515528964651791471420194"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722384000,
        "id": "19935",
        "totalStaked": "19714838039515528964651791471420194"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722470400,
        "id": "19936",
        "totalStaked": "19714838039515528964651791471420194"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722556800,
        "id": "19937",
        "totalStaked": "19814838039515528964651791471420194"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722643200,
        "id": "19938",
        "totalStaked": "19761520505104757543589178926536754"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722729600,
        "id": "19939",
        "totalStaked": "19747095155104757543589178926536754"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722902400,
        "id": "19941",
        "totalStaked": "19747095155104757543589178926536754"
    },
    {
        "__typename": "StakingDayData",
        "date": 1722988800,
        "id": "19942",
        "totalStaked": "19879149489630158807873632883699081"
    },
    {
        "__typename": "StakingDayData",
        "date": 1723075200,
        "id": "19943",
        "totalStaked": "19947027699193139829606043361144824"
    },
    {
        "__typename": "StakingDayData",
        "date": 1723248000,
        "id": "19945",
        "totalStaked": "19947027699193139829606043361144824"
    },
    {
        "__typename": "StakingDayData",
        "date": 1723507200,
        "id": "19948",
        "totalStaked": "19947070379193139829606043361144824"
    },
    {
        "__typename": "StakingDayData",
        "date": 1723593600,
        "id": "19949",
        "totalStaked": "19950975372647626775533736869102269"
    },
    {
        "__typename": "StakingDayData",
        "date": 1723766400,
        "id": "19951",
        "totalStaked": "20132998225734042170714044374198388"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724112000,
        "id": "19955",
        "totalStaked": "20147423575734042170714044374198388"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724284800,
        "id": "19957",
        "totalStaked": "20117742439258979105547748831596537"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724371200,
        "id": "19958",
        "totalStaked": "20176502483089246609708423585714878"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724457600,
        "id": "19959",
        "totalStaked": "20222536780149467630001196099323716"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724544000,
        "id": "19960",
        "totalStaked": "20236303360913432756698785583535928"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724803200,
        "id": "19963",
        "totalStaked": "20240603980913432756698785583535928"
    },
    {
        "__typename": "StakingDayData",
        "date": 1724976000,
        "id": "19965",
        "totalStaked": "20240603980913432756698785583535928"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725235200,
        "id": "19968",
        "totalStaked": "20311655618044271502133072623511937"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725321600,
        "id": "19969",
        "totalStaked": "20285107540638850176269213310169357"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725408000,
        "id": "19970",
        "totalStaked": "20385107540638850176269213310169357"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725494400,
        "id": "19971",
        "totalStaked": "20364910960482524808958134019482600"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725580800,
        "id": "19972",
        "totalStaked": "20342307420844601965026157279749015"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725667200,
        "id": "19973",
        "totalStaked": "20339815203264134250845828313327851"
    },
    {
        "__typename": "StakingDayData",
        "date": 1725840000,
        "id": "19975",
        "totalStaked": "20340315203264134250845828313327851"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726012800,
        "id": "19977",
        "totalStaked": "20381460530793360086156214561609455"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726099200,
        "id": "19978",
        "totalStaked": "20381148790793360086156214561609455"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726444800,
        "id": "19982",
        "totalStaked": "20381148790793360086156214561609455"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726531200,
        "id": "19983",
        "totalStaked": "20382177651188129427893043465458757"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726617600,
        "id": "19984",
        "totalStaked": "20377177651188129427893043465458757"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726704000,
        "id": "19985",
        "totalStaked": "20484620821188129427893043465458757"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726790400,
        "id": "19986",
        "totalStaked": "20484620821188129427893043465458757"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726876800,
        "id": "19987",
        "totalStaked": "20408918458843418005499548003010153"
    },
    {
        "__typename": "StakingDayData",
        "date": 1726963200,
        "id": "19988",
        "totalStaked": "20213656778122622985272850024710595"
    },
    {
        "__typename": "StakingDayData",
        "date": 1727049600,
        "id": "19989",
        "totalStaked": "20214156778122622985272850024710595"
    },
    {
        "__typename": "StakingDayData",
        "date": 1727136000,
        "id": "19990",
        "totalStaked": "20214156778122622985272850024710595"
    },
    {
        "__typename": "StakingDayData",
        "date": 1727222400,
        "id": "19991",
        "totalStaked": "20308426887231816255082180327229460"
    },
    {
        "__typename": "StakingDayData",
        "date": 1727308800,
        "id": "19992",
        "totalStaked": "20416178917231816255082180327229460"
    },
    {
        "__typename": "StakingDayData",
        "date": 1727481600,
        "id": "19994",
        "totalStaked": "20416678917231816255082180327229460"
    },
    {
        "__typename": "StakingDayData",
        "date": 1727827200,
        "id": "19998",
        "totalStaked": "20416678917231816255082180327229460"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728000000,
        "id": "20000",
        "totalStaked": "20522555352354038822119559307706923"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728172800,
        "id": "20002",
        "totalStaked": "20522555352354038822119559307706923"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728259200,
        "id": "20003",
        "totalStaked": "20523642042354038822119559307706923"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728432000,
        "id": "20005",
        "totalStaked": "20527179741721093012712588008001663"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728518400,
        "id": "20006",
        "totalStaked": "20598534921721093012712588008001663"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728864000,
        "id": "20010",
        "totalStaked": "20660896324963096129631366459606154"
    },
    {
        "__typename": "StakingDayData",
        "date": 1728950400,
        "id": "20011",
        "totalStaked": "20747339999297703854287201875686447"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729123200,
        "id": "20013",
        "totalStaked": "20754339999297703854287201875686447"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729296000,
        "id": "20015",
        "totalStaked": "20654339999297703854287201875686447"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729382400,
        "id": "20016",
        "totalStaked": "20654523669297703854287201875686447"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729468800,
        "id": "20017",
        "totalStaked": "20732740826775353098828149571884020"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729555200,
        "id": "20018",
        "totalStaked": "20714248306925807226687607204538990"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729641600,
        "id": "20019",
        "totalStaked": "20715848306925807226687607204538990"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729728000,
        "id": "20020",
        "totalStaked": "20717723806925807226687607204538990"
    },
    {
        "__typename": "StakingDayData",
        "date": 1729987200,
        "id": "20023",
        "totalStaked": "20717948806925807226687607204538990"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730073600,
        "id": "20024",
        "totalStaked": "20972666546925807226687607204538990"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730160000,
        "id": "20025",
        "totalStaked": "20974716546925807226687607204538990"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730246400,
        "id": "20026",
        "totalStaked": "21048010442753043986032429939327267"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730332800,
        "id": "20027",
        "totalStaked": "21054012442753043986032429939327267"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730419200,
        "id": "20028",
        "totalStaked": "21069868442753043986032429939327267"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730592000,
        "id": "20030",
        "totalStaked": "21069868442753043986032429939327267"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730678400,
        "id": "20031",
        "totalStaked": "21117794570380766831438487710413429"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730764800,
        "id": "20032",
        "totalStaked": "21117794570380766831438487710413429"
    },
    {
        "__typename": "StakingDayData",
        "date": 1730937600,
        "id": "20034",
        "totalStaked": "21116381270781066056803799654840750"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731024000,
        "id": "20035",
        "totalStaked": "21265830000782144277472429906762923"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731196800,
        "id": "20037",
        "totalStaked": "21173174011599553974268323179349398"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731283200,
        "id": "20038",
        "totalStaked": "21154784021599553974268323179349398"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731369600,
        "id": "20039",
        "totalStaked": "21185684124650746593409578886564172"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731456000,
        "id": "20040",
        "totalStaked": "21185684124650746593409578886564172"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731542400,
        "id": "20041",
        "totalStaked": "21185684124650746593409578886564172"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731628800,
        "id": "20042",
        "totalStaked": "20876383812746082346365539818259032"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731715200,
        "id": "20043",
        "totalStaked": "20858126012746082346365539818259032"
    },
    {
        "__typename": "StakingDayData",
        "date": 1731888000,
        "id": "20045",
        "totalStaked": "20880680535724500433757521063233607"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732060800,
        "id": "20047",
        "totalStaked": "20986503254166610194065190420786010"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732147200,
        "id": "20048",
        "totalStaked": "20986503254166610194065190420786010"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732233600,
        "id": "20049",
        "totalStaked": "20917594195015032591108867033677302"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732406400,
        "id": "20051",
        "totalStaked": "20894384725015032591108867033677302"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732492800,
        "id": "20052",
        "totalStaked": "20783506581203024326176738086255209"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732579200,
        "id": "20053",
        "totalStaked": "20783506581203024326176738086255209"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732665600,
        "id": "20054",
        "totalStaked": "20826522070525168136970843922554154"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732752000,
        "id": "20055",
        "totalStaked": "20953638802130013097009907503637633"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732838400,
        "id": "20056",
        "totalStaked": "20953638802130013097009907503637633"
    },
    {
        "__typename": "StakingDayData",
        "date": 1732924800,
        "id": "20057",
        "totalStaked": "20953638802130013097009907503637633"
    },
    {
        "__typename": "StakingDayData",
        "date": 1733184000,
        "id": "20060",
        "totalStaked": "20991706393448778004791983742909225"
    },
    {
        "__typename": "StakingDayData",
        "date": 1733356800,
        "id": "20062",
        "totalStaked": "20991206393448778004791983742909225"
    },
    {
        "__typename": "StakingDayData",
        "date": 1733443200,
        "id": "20063",
        "totalStaked": "20991206393448778004791983742909225"
    },
    {
        "__typename": "StakingDayData",
        "date": 1733616000,
        "id": "20065",
        "totalStaked": "21112225166874017511464811853708094"
    },
    {
        "__typename": "StakingDayData",
        "date": 1733702400,
        "id": "20066",
        "totalStaked": "21117765912645642273365801002524692"
    },
    {
        "__typename": "StakingDayData",
        "date": 1733788800,
        "id": "20067",
        "totalStaked": "21117004084717665220354230361438966"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734048000,
        "id": "20070",
        "totalStaked": "21130261884717665220354230361438966"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734134400,
        "id": "20071",
        "totalStaked": "21130261884717665220354230361438966"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734307200,
        "id": "20073",
        "totalStaked": "21130261884717665220354230361438966"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734393600,
        "id": "20074",
        "totalStaked": "21210828330678296856388020598557941"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734739200,
        "id": "20078",
        "totalStaked": "21210828330678296856388020598557941"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734825600,
        "id": "20079",
        "totalStaked": "21210911543205829495212644284969436"
    },
    {
        "__typename": "StakingDayData",
        "date": 1734912000,
        "id": "20080",
        "totalStaked": "21336196063205829495212644284969436"
    },
    {
        "__typename": "StakingDayData",
        "date": 1735689600,
        "id": "20089",
        "totalStaked": "21336196063205829495212644284969436"
    },
    {
        "__typename": "StakingDayData",
        "date": 1735776000,
        "id": "20090",
        "totalStaked": "21536826036958039736261703279570942"
    },
    {
        "__typename": "StakingDayData",
        "date": 1735948800,
        "id": "20092",
        "totalStaked": "21540826036958039736261703279570942"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736035200,
        "id": "20093",
        "totalStaked": "21769642133807941284955021448936410"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736121600,
        "id": "20094",
        "totalStaked": "21709632353697439589554153040043024"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736208000,
        "id": "20095",
        "totalStaked": "21744978094818520526112861739825132"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736294400,
        "id": "20096",
        "totalStaked": "21746878094818520526112861739825132"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736380800,
        "id": "20097",
        "totalStaked": "21777260106238087301609829984941968"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736640000,
        "id": "20100",
        "totalStaked": "21779260106238087301609829984941968"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736726400,
        "id": "20101",
        "totalStaked": "21781760106238087301609829984941968"
    },
    {
        "__typename": "StakingDayData",
        "date": 1736899200,
        "id": "20103",
        "totalStaked": "21881797236238087301609829984941968"
    },
    {
        "__typename": "StakingDayData",
        "date": 1737158400,
        "id": "20106",
        "totalStaked": "21836460629772295115644947629728116"
    },
    {
        "__typename": "StakingDayData",
        "date": 1737244800,
        "id": "20107",
        "totalStaked": "21919420367073894310394154874916562"
    },
    {
        "__typename": "StakingDayData",
        "date": 1737331200,
        "id": "20108",
        "totalStaked": "21920040684475045237559576288279423"
    },
    {
        "__typename": "StakingDayData",
        "date": 1737417600,
        "id": "20109",
        "totalStaked": "21919798784475045237559576288279423"
    }
];



// TotalSupply mapped by month and year
const totalSupplyByMonth = {
  '2023-10': 77531703,
  '2023-11': 78371825,
  '2023-12': 79350336, // Dec mapped to the last date totalSupply
  '2024-01': 80216640,
  '2024-02': 81026916,
  '2024-03': 81892174,
  '2024-04': 82731877,
  '2024-05': 83600890,
  '2024-06': 84442486,
  '2024-07': 85312828,
  '2024-08': 86183168,
  '2024-09': 87025590,
  '2024-10': 87896415,
  '2024-11': 88738792,
  '2024-12': 89608828,
  '2025-01':90243515
};

// Functions to calculate APY
function convertDurationToSec(duration) {
  switch (duration) {
    case '1-year':
      return 365 * 24 * 60 * 60;
    case '6-month':
      return (365 * 24 * 60 * 60) / 2;
    case '3-month':
      return (365 * 24 * 60 * 60) / 4;
    case '1-month':
      return (365 * 24 * 60 * 60) / 12;
    default:
      return 0;
  }
}
const fetchedDateUTC = 1737244800; // Fetch date UTC in seconds


function calculateRoi(totalStakedAmount, totalSupply, fetchDateUTC) {
  const seigPerBlock = 3.92;
  const blockNumsPerYear = 2628000;
  const stakedRatio = totalStakedAmount / totalSupply;

  const getStakerRatio = fetchDateUTC ? fetchDateUTC > 20241016 ? 0.5 : 0.4 : 0.5;
  const roi = (seigPerBlock * blockNumsPerYear * (stakedRatio + getStakerRatio * (1 - stakedRatio))) / totalStakedAmount;

  return roi;
}

function calculateRoiBasedonCompound(totalStakedAmount, totalSupply, duration, fetchDateUTC) {
  const compoundsPerMonth = 12.16666667; // Number of compounds per month
  const annualAPY = calculateRoi(totalStakedAmount, totalSupply, fetchDateUTC);
  const adjustedAPY = annualAPY / compoundsPerMonth;
  const stakeDuration = convertDurationToSec(duration);

  if (typeof stakeDuration !== 'number') return 0;

  const apyPerMonth = (1 + adjustedAPY) ** ((compoundsPerMonth * stakeDuration) / 31536000) - 1;

  return apyPerMonth * 100;
}

// Group by date and calculate APY
const result = stakingDayDatas.map(item => {
  // Convert totalStaked from Wei to TON
  const totalStakedTON = Number(item.totalStaked) / 1e27;

  // Extract year and month from item.date
  const dateObject = new Date(item.date * 1000);
  const yearMonth = `${dateObject.getUTCFullYear()}-${String(dateObject.getUTCMonth() + 1).padStart(2, '0')}`;

  // Use the totalSupply for this month
  const totalSupply = totalSupplyByMonth[yearMonth] || 0;

  // Calculate APY
  const apy = totalSupply
    ? calculateRoiBasedonCompound(totalStakedTON, totalSupply, "1-year", fetchedDateUTC)
    : 0;

  // Format date to YYYY/MM/DD
  const readableDate = dateObject.toISOString().split('T')[0].replace(/-/g, '/');

  return {
    Date: readableDate,
    APY: apy.toFixed(2) // Limit to 2 decimal places
  };
});

// Convert result to Excel sheet
const worksheet = xlsx.utils.json_to_sheet(result);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Staking APY");

// Write Excel file
xlsx.writeFile(workbook, 'ton_staking_apy.xlsx');

console.log('Excel file created successfully.');