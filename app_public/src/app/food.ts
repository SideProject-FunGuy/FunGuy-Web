export class NewFood {
  name: string;
  expiryDuration: string;
  expiryDate: string;
  category: string;

  constructor(){
    this.name='';
    this.expiryDuration='';
    this.expiryDate='';
    this.category='';
  }
};

export class Food {
  _id: string;
  name: string;
  created: Date;
  expiryDuration: string;
  expiryDate: Date;
  status: string;
  category: string;

  constructor(){
    this._id='';
    this.name='';
    this.created= new Date();
    this.expiryDuration='';
    this.expiryDate=new Date();
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
