import $ from 'jquery';
import 'jquery-serializejson';

function template(model) {
  let complete = model.isComplete();
  let fa = complete ? 'undo' : 'close';
  let action = complete ? 'undo' : 'remove';
  return `
    <li class="todo">
      <span class="title ${complete ? 'complete' : ''}">
        ${model.get('title')}
      </span>
      <button class="${action}" data-id="${model.id}">
        <i class="fa fa-${fa}"></i>
      </button>
    </li>
  `;
}

function wrapper() {
  return `
    <header>
      <h1>Things Todo</h1>
    </header>
    <main>
      <form class="todo-add">
        <input type="text" name="title" placeholder="Add Something">
        <button><i class="fa fa-plus"></i></button>
      </form>
      <ul class="todo-list"></ul>
    </main>
    <footer>
      <button class="clear">Clear Complete</button>
    </footer>
  `;
}

function View(collection) {
  this.collection = collection;
  this.$el = $('<div/>').addClass('todo-collection');
  this.$el.on('submit', 'form', (e) => {
    e.preventDefault();
    this.$el.find('.fa-plus')
      .removeClass('fa-plus')
      .addClass('fa-spin')
      .addClass('fa-spinner');
    let data = this.$el.find('form').serializeJSON();
    this.collection.add(data).save().then(() => this.render());
  });
  this.$el.on('click', '.remove', (e) => {
    e.preventDefault();
    let $button = $(e.currentTarget);
    let id = $button.data('id');
    let model = this.collection.get(id);
    $button.find('.fa-close')
      .removeClass('fa-close')
      .addClass('fa-spin')
      .addClass('fa-spinner');
    model.save({
      completeAt: new Date().toString()
    }).then(() => this.render());
  });
  this.$el.on('click', '.undo', (e) => {
    e.preventDefault();
    let $button = $(e.currentTarget);
    let id = $button.data('id');
    let model = this.collection.get(id);
    $button.find('.fa-undo')
      .removeClass('fa-undo')
      .addClass('fa-spin')
      .addClass('fa-spinner');
    model.save({
      completeAt: null
    }).then(() => this.render());
  });
  this.$el.on('click', '.clear', (e) => {
    e.preventDefault();
    this.$el.find('main').html(`
      <div class="clearing">
        <div class="spinner">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <h4>Deleting Complete Todos</h4>
      </div>
    `);
    this.$el.find('footer button').remove();
    let completeModels = this.collection.filter((model) => {
      return model.isComplete();
    });
    let deleteRequests = completeModels.map(m => m.destroy());
    Promise.all(deleteRequests).then(() => {
      this.render();
    });
  });
}

View.prototype = {
  render() {
    this.$el.html(wrapper());
    let $ul = this.$el.find('ul');
    this.collection.each(model => {
      let $li = $(template(model));
      $ul.append($li);
    });
    return this;
  }
};

export default View;
