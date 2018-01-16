'use strict';

var _TestBlock = require('./TestBlock');

var _TestBlock2 = _interopRequireDefault(_TestBlock);

var _Container = require('./Containers/Container1');

var _Container2 = _interopRequireDefault(_Container);

var _Container3 = require('./Containers/Container2');

var _Container4 = _interopRequireDefault(_Container3);

var _Container5 = require('./Containers/Container3');

var _Container6 = _interopRequireDefault(_Container5);

var _Container7 = require('./Containers/Container4');

var _Container8 = _interopRequireDefault(_Container7);

var _Container9 = require('./Containers/Container5');

var _Container10 = _interopRequireDefault(_Container9);

var _Holder = require('./Holders/Holder1');

var _Holder2 = _interopRequireDefault(_Holder);

var _Holder3 = require('./Holders/Holder2');

var _Holder4 = _interopRequireDefault(_Holder3);

var _Holder5 = require('./Holders/Holder3');

var _Holder6 = _interopRequireDefault(_Holder5);

var _Holder7 = require('./Holders/Holder4');

var _Holder8 = _interopRequireDefault(_Holder7);

var _Holder9 = require('./Holders/Holder5');

var _Holder10 = _interopRequireDefault(_Holder9);

var _Holder11 = require('./Holders/Holder6');

var _Holder12 = _interopRequireDefault(_Holder11);

var _Holder13 = require('./Holders/Holder7');

var _Holder14 = _interopRequireDefault(_Holder13);

var _Holder15 = require('./Holders/Holder8');

var _Holder16 = _interopRequireDefault(_Holder15);

var _Holder17 = require('./Holders/Holder9');

var _Holder18 = _interopRequireDefault(_Holder17);

var _Holder19 = require('./Holders/Holder10');

var _Holder20 = _interopRequireDefault(_Holder19);

var _Holder21 = require('./Holders/Holder11');

var _Holder22 = _interopRequireDefault(_Holder21);

var _Holder23 = require('./Holders/Holder12');

var _Holder24 = _interopRequireDefault(_Holder23);

var _Holder25 = require('./Holders/Holder13');

var _Holder26 = _interopRequireDefault(_Holder25);

var _MainHeading = require('./Headings/MainHeadings/MainHeading1');

var _MainHeading2 = _interopRequireDefault(_MainHeading);

var _MainHeading3 = require('./Headings/MainHeadings/MainHeading2');

var _MainHeading4 = _interopRequireDefault(_MainHeading3);

var _MainHeading5 = require('./Headings/MainHeadings/MainHeading3');

var _MainHeading6 = _interopRequireDefault(_MainHeading5);

var _MainHeading7 = require('./Headings/MainHeadings/MainHeading4');

var _MainHeading8 = _interopRequireDefault(_MainHeading7);

var _MainHeading9 = require('./Headings/MainHeadings/MainHeading5');

var _MainHeading10 = _interopRequireDefault(_MainHeading9);

var _Heading = require('./Headings/Headings/Heading1');

var _Heading2 = _interopRequireDefault(_Heading);

var _Heading3 = require('./Headings/Headings/Heading2');

var _Heading4 = _interopRequireDefault(_Heading3);

var _Heading5 = require('./Headings/Headings/Heading3');

var _Heading6 = _interopRequireDefault(_Heading5);

var _Heading7 = require('./Headings/Headings/Heading4');

var _Heading8 = _interopRequireDefault(_Heading7);

var _Heading9 = require('./Headings/Headings/Heading5');

var _Heading10 = _interopRequireDefault(_Heading9);

var _SubHeading = require('./Headings/SubHeadings/SubHeading1');

var _SubHeading2 = _interopRequireDefault(_SubHeading);

var _SubHeading3 = require('./Headings/SubHeadings/SubHeading2');

var _SubHeading4 = _interopRequireDefault(_SubHeading3);

var _SubHeading5 = require('./Headings/SubHeadings/SubHeading3');

var _SubHeading6 = _interopRequireDefault(_SubHeading5);

var _SubHeading7 = require('./Headings/SubHeadings/SubHeading4');

var _SubHeading8 = _interopRequireDefault(_SubHeading7);

var _SubHeading9 = require('./Headings/SubHeadings/SubHeading5');

var _SubHeading10 = _interopRequireDefault(_SubHeading9);

var _SecondarySubHeading = require('./Headings/SecondarySubHeadings/SecondarySubHeading1');

var _SecondarySubHeading2 = _interopRequireDefault(_SecondarySubHeading);

var _SecondarySubHeading3 = require('./Headings/SecondarySubHeadings/SecondarySubHeading2');

var _SecondarySubHeading4 = _interopRequireDefault(_SecondarySubHeading3);

var _SecondarySubHeading5 = require('./Headings/SecondarySubHeadings/SecondarySubHeading3');

var _SecondarySubHeading6 = _interopRequireDefault(_SecondarySubHeading5);

var _SecondarySubHeading7 = require('./Headings/SecondarySubHeadings/SecondarySubHeading4');

var _SecondarySubHeading8 = _interopRequireDefault(_SecondarySubHeading7);

var _SecondarySubHeading9 = require('./Headings/SecondarySubHeadings/SecondarySubHeading5');

var _SecondarySubHeading10 = _interopRequireDefault(_SecondarySubHeading9);

var _Paragraph = require('./Paragraphs/Paragraph1');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Paragraph3 = require('./Paragraphs/Paragraph2');

var _Paragraph4 = _interopRequireDefault(_Paragraph3);

var _Paragraph5 = require('./Paragraphs/Paragraph3');

var _Paragraph6 = _interopRequireDefault(_Paragraph5);

var _Paragraph7 = require('./Paragraphs/Paragraph4');

var _Paragraph8 = _interopRequireDefault(_Paragraph7);

var _Paragraph9 = require('./Paragraphs/Paragraph5');

var _Paragraph10 = _interopRequireDefault(_Paragraph9);

var _CircleImage = require('./Images/CircleImage');

var _CircleImage2 = _interopRequireDefault(_CircleImage);

var _OvalImage = require('./Images/OvalImage');

var _OvalImage2 = _interopRequireDefault(_OvalImage);

var _Figure = require('./Images/Figure');

var _Figure2 = _interopRequireDefault(_Figure);

var _RectangleImage = require('./Images/RectangleImage');

var _RectangleImage2 = _interopRequireDefault(_RectangleImage);

var _RoundedImage = require('./Images/RoundedImage');

var _RoundedImage2 = _interopRequireDefault(_RoundedImage);

var _RoundedRectangleImage = require('./Images/RoundedRectangleImage');

var _RoundedRectangleImage2 = _interopRequireDefault(_RoundedRectangleImage);

var _SquareImage = require('./Images/SquareImage');

var _SquareImage2 = _interopRequireDefault(_SquareImage);

var _TallRectangleImage = require('./Images/TallRectangleImage');

var _TallRectangleImage2 = _interopRequireDefault(_TallRectangleImage);

var _TallRoundedRectangleImage = require('./Images/TallRoundedRectangleImage');

var _TallRoundedRectangleImage2 = _interopRequireDefault(_TallRoundedRectangleImage);

var _Hero = require('./Images/Heros/Hero1');

var _Hero2 = _interopRequireDefault(_Hero);

var _Hero3 = require('./Images/Heros/Hero2');

var _Hero4 = _interopRequireDefault(_Hero3);

var _Hero5 = require('./Images/Heros/Hero3');

var _Hero6 = _interopRequireDefault(_Hero5);

var _Hero7 = require('./Images/Heros/Hero4');

var _Hero8 = _interopRequireDefault(_Hero7);

var _Hero9 = require('./Images/Heros/Hero5');

var _Hero10 = _interopRequireDefault(_Hero9);

var _Navbars = require('./Navbars');

var _Navbars2 = _interopRequireDefault(_Navbars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./css/SuperStyleSheet.css');

module.exports = {
    Block2: _TestBlock2.default,
    Container1: _Container2.default,
    Container2: _Container4.default,
    Container3: _Container6.default,
    Container4: _Container8.default,
    Container5: _Container10.default,
    Holder1: _Holder2.default,
    Holder2: _Holder4.default,
    Holder3: _Holder6.default,
    Holder4: _Holder8.default,
    Holder5: _Holder10.default,
    Holder6: _Holder12.default,
    Holder7: _Holder14.default,
    Holder8: _Holder16.default,
    Holder9: _Holder18.default,
    Holder10: _Holder20.default,
    Holder11: _Holder22.default,
    Holder12: _Holder24.default,
    Holder13: _Holder26.default,
    MainHeading1: _MainHeading2.default,
    MainHeading2: _MainHeading4.default,
    MainHeading3: _MainHeading6.default,
    MainHeading4: _MainHeading8.default,
    MainHeading5: _MainHeading10.default,
    SubHeading1: _SubHeading2.default,
    SubHeading2: _SubHeading4.default,
    SubHeading3: _SubHeading6.default,
    SubHeading4: _SubHeading8.default,
    SubHeading5: _SubHeading10.default,
    SecondarySubHeading1: _SecondarySubHeading2.default,
    SecondarySubHeading2: _SecondarySubHeading4.default,
    SecondarySubHeading3: _SecondarySubHeading6.default,
    SecondarySubHeading4: _SecondarySubHeading8.default,
    SecondarySubHeading5: _SecondarySubHeading10.default,
    Paragraph1: _Paragraph2.default,
    Paragraph2: _Paragraph4.default,
    Paragraph3: _Paragraph6.default,
    Paragraph4: _Paragraph8.default,
    Paragraph5: _Paragraph10.default,
    CircleImage: _CircleImage2.default,
    Figure: _Figure2.default,
    OvalImage: _OvalImage2.default,
    RectangleImage: _RectangleImage2.default,
    RoundedImage: _RoundedImage2.default,
    RoundedRectangleImage: _RoundedRectangleImage2.default,
    SquareImage: _SquareImage2.default,
    TallRectangleImage: _TallRectangleImage2.default,
    TallRoundedRectangleImage: _TallRoundedRectangleImage2.default,
    Hero1: _Hero2.default,
    Hero2: _Hero4.default,
    Hero3: _Hero6.default,
    Hero4: _Hero8.default,
    Hero5: _Hero10.default,
    NavBar1: _Navbars2.default
};