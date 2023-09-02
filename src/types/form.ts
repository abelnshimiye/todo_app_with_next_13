interface Option {
    value: string;
    label: string;
  }

export interface Config {
    labelText: string;
    labelId: string;
    type?: string;
    value: string;
    link?:{
      linkText:string;
      linkUrl:string;
    },
    required?: boolean;
    componentType: 'input' | 'textarea' | 'select';
    options?: Option[];
}