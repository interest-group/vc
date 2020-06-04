import { oneOf } from '../../utils/assist'
import { createPopper } from '@popperjs/core'

export default {
  props: {
    placement: {
      validator (value) {
        return oneOf(value, [
          'auto', 'auto-start', 'auto-end',
          'top', 'top-start', 'top-end',
          'bottom', 'bottom-start', 'bottom-end',
          'right', 'right-start', 'right-end',
          'left', 'left-start', 'left-end'
        ])
      },
      default: 'auto-start'
    },
    strategy: {
      validator (value) {
        return oneOf(value, ['absolute', 'fixed'])
      },
      default: 'absolute'
    },
    modifiers: {
      type: Array,
      default () {
        return []
      }
    },
    sameWidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    getRefReference () {
      return this.reference || this.$refs.reference
    },
    getPopper () {
      return this.popper || this.$refs.popper
    },
    createPopper () {
      const popper = this.getPopper()
      const reference = this.getRefReference()
      if (!popper || !reference) return false
      this.destroyPopper()
      this.pInstance = createPopper(reference, popper, Object.assign({
        placement: this.placement,
        strategy: this.strategy,
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              gpuAcceleration: false,
              adaptive: false
            }
          },
          {
            name: 'sameWidth',
            enabled: this.sameWidth,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn: ({ state }) => {
              state.styles.popper.width = `${state.rects.reference.width}px`
            },
            effect: ({ state }) => {
              state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`
            }
          },
          ...this.modifiers
        ]
      }, this.options))
    },
    updatePopper () {
      this.pInstance ? this.pInstance.update() : this.createPopper()
    },
    destroyPopper () {
      if (this.pInstance && this.pInstance.destroy instanceof Function) {
        this.pInstance.destroy()
        this.pInstance = null
      }
    }
  }
}
