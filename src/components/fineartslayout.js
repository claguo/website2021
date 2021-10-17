import fish from "./pics/fishautomata.jpg";
import fish1 from "./pics/fish1.jpg";
import fish2 from "./pics/fish2.jpg";
import thumbfish from './pics/thumbfish.jpg';

import primary from './pics/primary.jpg';
import thumbdad from './pics/thumbdad.jpg';


const finearts = [{
    'link': 'fish',
    "title":"Fish Automaton",
    'thumb':[thumbfish],
    'cover':[fish],
    'imgs':[fish1,fish2],
    'h': ['date', 'tools', 'mechanism'],
    'det': ['November 2020', 'Wood, wire, laser cutter', 'When the handle is turned, wood disks rotate to push each fish up and down. Fish swim from a disorganized cluster to a circle formation and back.']
}, {
    'link':'primary',
    "title":"Primary",
    'thumb':[thumbdad],
    'cover':[primary],
    'imgs':[],
    'fullimg':[primary],
    'h': ['date', 'materials', 'size'],
    'det': ['November 2019', 'Red, yellow, and blue colored pencils', '16" x 18"']
}]
export default finearts;