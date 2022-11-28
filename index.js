// dom elements
const buttons = document.querySelectorAll('button');
const textarea = document.querySelector('textarea');
const output = document.querySelector('.output');

// flavours
const flavours = {
  ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
  pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
  space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
};

/**
 * @param {string} inputText
 * @param {string} flavour
 */
const flavourize = (inputText, flavour) => {
  if (flavours[flavour] === undefined) return '';
  let flavourIndex = -1;

  const words = inputText.split(' ');
  const flavourizedWords = words.map((word, index) => {
    if (flavourIndex === flavours[flavour].length - 1) flavourIndex = 0;
    else flavourIndex++;

    if (index === 0 || index % 3 === 0) return flavours[flavour][flavourIndex];
    return word;
  });
  return flavourizedWords.join(' ');
};

const updateOutput = text => {
  output.innerText = text;
};

// event listener
buttons.forEach(b => {
  b.addEventListener('click', e => {
    e.preventDefault();
    const flavourizedWords = flavourize(textarea.value, b.dataset.flavour);
    updateOutput(flavourizedWords);
  });
});
