
import newyearthumb from "./pics/newyearscard.JPG";
import mimesisthumb from "./pics/mimesisthumb.jpg";
import mimesis1 from "./pics/mimesis1.jpg";
import mimesis2 from "./pics/mimesis2.jpg";

import thumbgogreen from './pics/thumbgogreen.png';
import thumbbee from './pics/thumbbee.jpg';
import thumbhill from './pics/thumbhill.jpg';
import thumbfish from './pics/thumbfish.jpg';
import thumbmimesis from './pics/thumbmimesis.jpg';
import thumbdad from './pics/thumbdad.jpg';
import thumbhitchpremier from './pics/thumbhitchpremier.png';

import howitworks1 from './pics/howitworks1.png';
import testimonials1 from './pics/testimonials1.png';


import primary from './pics/primary.jpg';

import hitchpremier from './pics/hitchpremier.png';

import hill1 from "./pics/hill1.jpg";
import hill2 from "./pics/hill2.jpg";
import hill3 from "./pics/hill3.jpg";
import hill4 from "./pics/hill4.jpg";

import bee2 from "./pics/bee2.jpg";
import bee from './pics/beepattern.jpg';

import fish from "./pics/fishautomata.jpg";
import fish1 from "./pics/fish1.jpg";
import fish2 from "./pics/fish2.jpg";

import gogreen from './pics/gogreen1.png';

import newyear from './pics/newyearscard.gif';

import snow from './pics/snow.jpg';
import thumbsnow from './pics/thumbsnow.jpg';

// import pothosthumb from "./pics/pothosthumb.png";

const layouts = [{
        'link': 'hitch-premier',
        'title':'Hitch Premier Landing Page',
        'thumb': [thumbhitchpremier],
        'desc':"The landing page for Hitch's newest product, Hitch Premier. Premier offers more privacy and greater convenience at a higher price than previous Hitch products. The landing page targets older, wealthier consumers through an emphasis on luxury, comfort, and professionalism.",
        'imgs':[hitchpremier],
        'h': ['date', 'tools', 'my role', 'team'],
        'det': [
            'August 2021',
            'Figma',
            'Product Design Intern',
            "Kush Singh (Product Designer/CEO) - Kevin Kim (Illustrator) - Tien Dinh (Product Design Intern)"],
        'imgrow':[howitworks1, testimonials1],
        'imgrowtitle':'Early Iterations',
        'imgrowcaptions':['Rejected in favor of a cleaner design with more white space and a less-overwhelming look.', 'Rejected in favor of a bolder design with greater contrast, as well as buttons for a more tactile, interactive feel.']
    }, {
        'link': 'gogreen',
        'title':'GoGreen',
        'thumb': [thumbgogreen],
        'desc':'An app that simplifies sustainable shopping by suggesting and locating sustainable shopping locations based on ratings, price level, user interest, and sustainablitily.',
        'desc3':'App planning and process',
        'exturl':'https://tinyurl.com/gogreenUIUX',
        'imgs':[gogreen],
        'h': ['date', 'tools', 'team'],
        'det': [
            'January 2021',
            'AdobeXD',
            "Amrita Desmet, RISD ID '24"]
    }, {
        'link': 'snow',
        'title': 'Snow',
        'thumb': [thumbsnow],
        'cover': [snow],
        'imgs' :[],
        'fullimg':[snow],
        'h': ['date', 'materials', 'size', 'inspiration'],
        'det': ['May 2021', 'Acrylic paint, canvas', "3.5' x 8.5'", 'A contemporary take on ukiyo-e art.']
    }, {
        'link':'bee',
        "title":"Bee Pattern",
        'thumb':[thumbbee],
        'cover':[bee],
        'imgs':[bee2],
        'h': ['date', 'materials', 'size', 'inspiration'],
        'det': [
            'October 2020',
            'Butcher paper, colored pencil',
            "6' x 4'",
            'Inspired by the 10,000 Suns public garden in Providence, Rhode Island, this pattern represents not only the new flora and fauna that 10,000 Suns brought to urban Providence, but also the community of volunteers that assembled to care for the plants.']
    }, {
        'link': 'guo-greeting',
        "title":"Guo Family New Year's Card",
        'thumb':[newyearthumb],
        'cover':[newyear],
        'imgs':[],
        'fullimg':[newyear],
        'h': ['date', 'tools', 'description'],
        'det': ['December 2020', 'Procreate', "A digital new year's greeting card featuring members of my family and me."]
    }, {
        'link': 'hill',
        "title":"Hill",
        'thumb':[thumbhill],
        'cover':[hill3],
        'imgs':[hill1,hill2,hill4],
        'h': ['date', 'materials', 'construction'],
        'det': ['November 2020', 'Paper, paint', 'Carefully measured, hand-cut grooves create cross sections that interlock perfectly and allow the hill to pop up and fold flat.']
    }, {
        'link': 'fish',
        "title":"Fish Automaton",
        'thumb':[thumbfish],
        'cover':[fish],
        'imgs':[fish1,fish2],
        'h': ['date', 'tools', 'mechanism'],
        'det': ['November 2020', 'Wood, wire, laser cutter', 'When the handle is turned, wood disks rotate to push each fish up and down. Fish swim from a disorganized cluster to a circle formation and back.']
    // }, {
    //     'link':'locker-snake',
    //     "title":"Snake",
    //     'thumb':[thumbsnake],
    //     'cover':[snake1],
    //     'desc':'Construction paper mimics the colors and shadows produced by light.',
    //     'imgs':[snake1],
    //     'fullimg':[snakefull],
    //     'h': ['date', 'tools', 'exhibition'],
    //     'det': ['July 2019', 'Paper', 'Displayed at the University of Texas Ashman Locker Gallery']
    }, {
        'link':'mimesis',
        "title":"Rice Krispie Mimesis",
        'thumb':[thumbmimesis],
        'cover':[mimesis1],
        'imgs':[mimesisthumb, mimesis2],
        'h': ['date', 'materials', 'size', 'description'],
        'det': ['November 2020', 'Cardboard', '26" x 14"','A Rice Krispie Treat wrapper and snack scaled up to ten times the original size.']
    }, {
        'link':'primary',
        "title":"Primary",
        'thumb':[thumbdad],
        'cover':[primary],
        'imgs':[],
        'fullimg':[primary],
        'h': ['date', 'materials', 'size'],
        'det': ['November 2019', 'Red, yellow, and blue colored pencils', '16" x 18"']
    }
    // {
    //     'link':'boxes',
    //     "title":"Boxes",
    //     'thumb':[thumbboxes],
    //     "year":"November 2020",
    //     "mats":"wood, plastic water bottles, plastic tarp",
    //     'desc1':'An installation in the UT Austin Ashman Locker Gallery.',
    //     'desc2':'Colored paper in a school locker presents light in a tangible form.',
    //     'imgs':[mimesis1, mimesisthumb, mimesis2],
    // },
]

export default layouts;