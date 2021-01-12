export class Food {
  name: string;
  expiryDuration: string;
  expiryDate: Date;
  status: string;
  category: string;

  constructor(){
    this.name='';
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
