// Notes for backend for Vendme
Set up auth
created /register and /login endpoints


Available routes:

usersRouter - /api/users:
 GET user by id - /:id; 
 GET all users - /;
 POST user - /; 
 DELETE user - /:id; 
 PUT user- /:id

vendorRouter - /api/vendor: 
 GET vendor by id - /:id; 
 GET all vendors - /;
 POST vendor - /; 
 DELETE vendor - /:id; 
 PUT vendor- /:id;
 GET stalls by vendor id - /:id/stalls;
 GET products by vendor id - /:id/products;

marketRouter - /api/market: 
 GET vendor by id - /:id; 
 GET all markets - /;
 POST market - /; 
 DELETE market - /:id; 
 PUT market- /:id;
 GET stalls by market Id - /:id/stalls;
 GET products by market id - /:id/products;

stallRouter - /api/stalls:
 GET all stalls - /;
 POST stall - /; 
 DELETE stall - /:id; 
 PUT stall- /:id;
 GET all sizes by the vendors ID - /:id/size;

 productRouter - /api/products:
 GET all products - /;
 GET product by ID - /:id;
 POST product - /; 
 DELETE product - /:id; 
 PUT product- /:id;
 
 

authRouter - /auth: registration - /register; login - /login;