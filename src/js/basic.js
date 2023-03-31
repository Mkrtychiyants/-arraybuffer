export default class ArrayBufferConverter {
  load() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      this.buffer = new ArrayBuffer(data.length * 2);
      this.bufferView = new Uint16Array(this.buffer);
      for (let i = 0; i < input.length; i += 1) {
        this.bufferView[i] = input.charCodeAt(i);
      }
      return this.buffer;
    })(data);
  }

  toString(buffer) {
    this.bufferView = new Uint16Array(buffer);
    this.newArray = String.fromCharCode.apply(null, this.bufferView);
    return this.newArray;
  }
}
