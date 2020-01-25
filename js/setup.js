'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var setupSimilarElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var randomNumber = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizards = [];
for (var j = 0; j < 4; j++) {
  wizards[j] = {
    name: randomNumber(WIZARD_NAME) + ' ' + randomNumber(WIZARD_SURNAME),
    coatColor: randomNumber(WIZARD_COAT),
    eyesColor: randomNumber(WIZARD_EYES)
  };
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');