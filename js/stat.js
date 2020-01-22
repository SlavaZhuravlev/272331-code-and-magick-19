'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_MARGIN = 50;
var shadowCloud = 'rgba(0, 0, 0, 0.7)';
var fontCloud = '16px PT Mono';
var colorBlack = '#000000';
var colorWhite = '#ffffff';
var colorUser = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var paintsColumn = function () {
  return 'hsl(240,' + Math.random() * 100 + '%, 40%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, shadowCloud);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, colorWhite);

  ctx.fillStyle = colorBlack;
  ctx.font = fontCloud;
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_Y, COLUMN_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_Y, COLUMN_MARGIN + CLOUD_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = colorBlack;
    ctx.fillText(names[i], COLUMN_HEIGHT + ((COLUMN_WIDTH + COLUMN_MARGIN) * i), CLOUD_HEIGHT - CLOUD_Y);
    ctx.fillText(Math.round(times[i]), COLUMN_HEIGHT + ((COLUMN_WIDTH + COLUMN_MARGIN) * i), CLOUD_HEIGHT - COLUMN_WIDTH - (COLUMN_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = names[i] === 'Вы' ? colorUser : paintsColumn();
    ctx.fillRect(COLUMN_HEIGHT + ((COLUMN_WIDTH + COLUMN_MARGIN) * i), COLUMN_HEIGHT + COLUMN_WIDTH + COLUMN_MARGIN, COLUMN_WIDTH, -(COLUMN_HEIGHT * times[i] / maxTime));
  }
};
