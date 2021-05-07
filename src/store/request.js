import { makeAutoObservable } from "mobx";

class request {
  errorLog = false;
  loading = false;
  array = [];
  result = {}

  constructor() {
    makeAutoObservable(this);
  }

  setArray(arg) {
    arg.map(element => this.array.push(element));
  }

  setErrorLog(arg) {
    this.errorLog = arg;
    return this.errorLog;
  }

  setLoading(arg) {
    this.loading = arg;
    return this.loading;
  }

  download() {
    fetch('http://localhost:7070/api/services')
    .then((data) => data.json())
    .then((data) => {
      this.setArray(data)
    })
    .finally(() => this.setLoading(false));
  }

  elementLoad({arg}) {
    this.setLoading(true);
    this.setErrorLog(false);
    setInterval(() => {
    fetch(`'http://locahost:7070/api/services/' + ${arg}`)
    .then((data) => data.json())
    .catch((error) => {
      console.error('error:',error);
      this.setErrorLog(true);})
    .finally(() => this.setLoading(false))} , 6000)

  }
 }

export default request