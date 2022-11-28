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

  const words = inputText.split(' ');
  const flavourizedWords = words.map((word, index) => {
    const randomIndex = Math.floor(Math.random() * flavours[flavour].length);

    if (index === 0 || index % 3 === 0) return flavours[flavour][randomIndex];
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
