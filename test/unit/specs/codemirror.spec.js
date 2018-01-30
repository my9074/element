import { createTest, destroyVM } from '../util';
import Codemirror from 'packages/codemirror';

describe('Codemirror', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Codemirror, true);
    expect(vm.$el).to.exist;
  });
});

