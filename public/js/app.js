const Recounter = {
  rootElement: '#app',
  count: 0,
  start: function() {
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function() {
    this.root = document.querySelector('#app');
    this.addButton = document.querySelector('#increment');
    this.output = document.querySelector('#output');
  },
  bindEvents: function() {
    this.addButton.addEventListener('click', () => {
      this.count = this.count += 1;
      this.render();
    });
  },
  render: function() {
    this.output.textContent = this.count;
  }
};
Recounter.start();
