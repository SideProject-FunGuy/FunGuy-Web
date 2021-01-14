export class NewFood {
  name: string;
  expiryDuration: string;
  category: string;

  constructor(){
    this.name='';
    this.expiryDuration='';
    this.category='';
  }
};

export class Food {
  _id: string;
  name: string;
  created: Date;
  expiryDuration: string;
  status: string;
  category: string;

  constructor(){
    this._id='';
    this.name='';
    this.created= new Date();
    this.expiryDuration='';
    this.status='';
    this.category='';
  }
};

export class ApiFood {
  id: string;
  name: string;
  url: string;

  constructor(){
    this.id='';
    this.name='';
    this.url='';
  }
};
