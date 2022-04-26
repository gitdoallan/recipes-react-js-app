/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
<Route path="/explorar/comidas/ingredientes" component={ ExploreIngredients } />;
{ /*  Tela de explorar */ }
<Route path="/explorar/bebidas/ingredientes" component={ ExploreIngredients } />;
{ /*  Tela de explorar */ }
<Route path="/explorar/comidas/area" component={ ExploreOrigin } />;
{ /*  Tela de explorar */ }
<Route path="/explorar/comidas" component={ ExploreMain } />;
{ /*  Tela de explorar */ }
<Route exact path="/explorar/bebidas" component={ ExploreMain } />;
{ /*  Tela de explorar */ }
<Route path="/receitas-feitas" component={ RecipesDoneAndFavorite } />;
{ /*  Tela de explorar */ }
<Route path="/receitas-favoritas" component={ RecipesDoneAndFavorite } />;
{ /*  Tela de explorar */ }
<Route exact path="/explorar" component={ Explore } />;
{ /* Tela de explorar bebidas */ }
<Route path="/bebidas" component={ Main } />;
{ /* Tela de explorar comidas */ }
<Route path="/comidas" component={ Main } />;
{ /*  Tela de perfil */ }
<Route path="/perfil" component={ Profile } />;
