'use strict';

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FAREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomWizard = function () {
  return {
    name: getRandomElement(WIZARD_NAME) + ' ' + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(WIZARD_COAT),
    eyesColor: getRandomElement(WIZARD_EYES)
  };
};

var getCloneWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getGenerateWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push(getRandomWizard());
  }

  return wizards;
};

var createWizards = function (wizards) {
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(getCloneWizard(wizard));
  });
  setupSimilarList.appendChild(fragment);
};

createWizards(getGenerateWizards());

document.querySelector('.setup-similar').classList.remove('hidden');

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopupOn();
  }
};

var openPopupOn = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress());

  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      setup.classList.add('hidden');
    }
  });
};

var closePopupOn = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress());
};

setupOpen.addEventListener('click', function () {
  openPopupOn();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopupOn();
  }
});

setupClose.addEventListener('click', function () {
  closePopupOn();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopupOn();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(WIZARD_COAT);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(WIZARD_EYES);
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = getRandomElement(WIZARD_FAREBALL);
});
