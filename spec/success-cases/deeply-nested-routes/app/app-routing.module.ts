declare const NgModule: any;
declare const RouterModule: any;
declare const SomeComponent: any;

const baseRoutes = [
  {
    path: '',
    component: SomeComponent
  },
  {
    path: 'errors',
    children: [
      {
        path: 'not-found',
        component: SomeComponent
      },
      {
        path: 'internal-server-error',
        component: SomeComponent
      }
    ]
  }
];

const notFoundRoute = {
  path: '**',
  component: SomeComponent
};

const routes = [
  {
    path: 'app-shell',
    component: SomeComponent
  },
  {
    path: '',
    component: SomeComponent,
    children: [...baseRoutes, notFoundRoute]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
