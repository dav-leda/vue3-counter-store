

export const counterMixin = {

  // Si el objeto data del Mixin es declarado en forma normal
  // mantiene un estado global
  // Y si es declarado como una factory function
  // el estado es local para cada componente
  data: {
    counterMixin: 0
  },

  // data: () => ({
  //   counterMixin: 0
  // }),

  computed: {
    doubleMixin() {
      return this.counterMixin * 2
    }
  },

  methods: {
    incrementMixin() {
      this.counterMixin++
    },
    decrementMixin() {
      this.counterMixin > 0 && this.counterMixin--
    }
  }
}
