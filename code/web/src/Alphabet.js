(function($, _, Backbone, Joy){
    var Character = Backbone.Model.extend({});

    var Alphabet = Backbone.Collection.extend({
        model : Character
    });

    var AlphabetView = Backbone.View.extend({
        initialize : function(){
            this.render();
        },

        render : function(){
            var container = this.container();
            new LeftBraceView({ el : container });
            new CharactersView({ el : container, model : this.model });
            new RightBraceView({ el : container });
        },

        container : function(){
            if (! this._container) {
                this._container = $("<span class='alphabet'/>");
                this._container.appendTo(this.$el);
            }
            return this._container;
        }
    });

    var BraceView = Backbone.View.extend({
        initialize : function(){
            this.render();
        },

        render : function(){
            var container = this.container();
            container.text(this.options.symbol);
        },

        container : function(){
            if (! this._container) {
                var container = $("<span class='brace'/>");
                _.each(this.options.classes, function(aClass){
                    container.addClass(aClass);
                });
                this._container = container;
                this._container.appendTo(this.$el);
            }
            return this._container;
        }
    });

    var LeftBraceView = BraceView.extend({
        initialize : function(){
            this.options.symbol = "{";
            this.options.classes = ['left'];
            BraceView.prototype.initialize.apply(this, arguments);
        }
    });

    var RightBraceView = BraceView.extend({
        initialize : function(){
            this.options.symbol = "{";
            this.options.classes = ['right'];
            BraceView.prototype.initialize.apply(this, arguments);
        }
    });

    var CharactersView = Backbone.View.extend({
        initialize : function(){
            this.render();
        },

        render : function(){
            var container = this.container();
            this.model.each(function(character){
                new CharacterView({ el : container, model : character });
            });
        },

        container : function(){
            if (! this._container) {
                this._container = $("<span class='characters'/>");
                this._container.appendTo(this.$el);
            }
            return this._container;
        }
    });

    var CharacterView = Backbone.View.extend({
        initialize : function(){
            this.render();
        },

        render : function(){
            var container = this.container();
            container.text(this.model.symbol);
        },

        container : function(){
            if (! this._container) {
                this._container = $("<span class='character'/>");
                this._container.appendTo(this.$el);
            }
            return this._container;
        }
    });
    
    Joy.Character = Character;
    Joy.Alphabet = Alphabet;
    Joy.AlphabetView = AlphabetView;
})(jQuery, _, Backbone, Joy);
