import { fail, redirect } from '@sveltejs/kit';
import * as vortex from '../api/tasks/+server.js';

export async function load({ locals }) {
  console.log("Loading locals ", locals);
  // if (locals.user) throw redirect(307, '/');
}

export const actions = {
  default: async ({ cookies, request, url }) => {
    // const data = await request.formData();

    // console.log(data.get('email'), data.get('password'));
    // console.log(request.body);

    const res = await vortex.POST({ cookies, request, url });

    console.log("Response ", res.status, res.body);

    // if (body.errors) {
    //   return fail(401, body);
    // }

    // const value = btoa(JSON.stringify(body.user));
    // cookies.set('jwt', value, { path: '/' });

    // throw redirect(307, '/');
  }
};