import Storage from './index.js';

class ProductStorage extends Storage {
  findIdxByName(name) {
    return this.items.findIndex((item) => item.name === name);
  }

  useItem(idx, count) {
    super.useItem(idx, count);

    // 사용 후 더이상 남아있지 않은 Product는 목록에서 삭제
    if (this.getItem(idx).count <= 0) {
      this.removeItem(idx);
    }
  }
}

export default ProductStorage;
