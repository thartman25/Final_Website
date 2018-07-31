var target = document.getElementById('target');
var facts = [
  '"Taylor was inducted posthumously into the Washington Redskins Ring of Fame on November 30, 2008. He joined 42 others and was the first player introduced to the ring since Gary Clark was inducted in late 2007."',

  '"Tight end Chris Cooley, tackle Chris Samuels, and long snapper Ethan Albright honored Taylor at the 2008 Pro Bowl by wearing his number 21 rather than their usual numbers. To honor Taylor in the first game following his death, the Redskins defense lined up ten players on the field against the Buffalo Bills leaving Taylor\'s traditional position of free safety vacant for the first defensive play."',

  '"Taylor played high school football in Pinecrest, a suburb of Miami. He originally began his high school football career at Miami Killian High School, a Class 2A public school, but transferred to Gulliver Preparatory School, a Class prep school, where he was a three-sport star in football, track and basketball."',

  '"Taylor was considered the No. 1 prospect in Miami-Dade County by the Miami Herald. He was also rated the nation\'s No. 1 skill athlete and an All-American by Super Prep. Taylor was also an Orlando Sentinel Super Southern Team selection, the No. 1 athlete on the Florida Times-Union Super 75 list and rated the No. 1 player in Florida by The Gainesville Sun."',

  '"In track & field, Taylor won the state 2A 100-meter dash in 2000 and was also one of the state\'s top 400-meter dash sprinters."',

  '"The football field at Gulliver Prep was renamed Sean Taylor Memorial Field on September 5, 2009."',

  '"As a rookie in 2004, he wore No. 36 before switching to No. 21 for the remainder of his career."',

  '"Due to his ferocious hits, several of his Redskins teammates nicknamed him "Meast," a portmanteau from the expression "half man, half beast."',

  '"The Washington Redskins selected Taylor in the first round (fifth overall) of the 2004 NFL Draft."',

  '"His longtime girlfriend Jackie García (a niece of actor Andy García) have a daughter named Jackie"',
];

function newFact () {
  var i = (Math.random() * facts.length) | 0;
  target.innerText = facts[i]
}

newFact();
