const $ = (id) => document.querySelector(id);

// Sections
const headerSection = $('#header');
const alertSection = $('#alert');
const restaurantSliderSection = $('#restaurants');
const miniAppsSection = $('#miniapps');
const searchBarSection = $('#searchbar');
const userTableSection = $('#form');
const peopleSection = $('#people');
const closureSection = $('#closure');

// Containers
const resCardsSlider = $('#res-cards-slider')
const resCardsSliderOthers = document.querySelectorAll('#res-cards-slider > div:not(:nth-of-type(1))')

// Elements
const resCardTop = $('#card-top');
const resCardBottomLeftTextLocation = $('#card-bottom-left-text-location');
const resCardBottomRight = $('#card-bottom-right');
const cardButton = $('#card-button');
const logoHeader = $('#logo-header');

// Table Creation & Access
const createTableText = $('#create-table-text');
const enterTableText = $('#enter-table-text');
const tableType = $('#table-type');
const tableAddressInput = $('#table-address');
const createTableTitle = $('#create-table-title');
const enterTableTitle = $('#enter-table-title');
const createTableButton = $('#create-table-button');
const enterTableButton = $('#enter-table-button');
const createTableInstructions = $('#create-table-instructions');

