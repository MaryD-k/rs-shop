export interface User {
  firstName: string;
  lastName: string;
  token: string;
  cart: [string];
  favorites: [string];
  orders: [
    {
      items: [
        {
          id: string;
          amount: 0;
        }
      ];
      details: {
        name: string;
        address: string;
        phone: string;
        timeToDeliver: string;
        comment: string;
      };
      id: string;
    }
  ];
}
