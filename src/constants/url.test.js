import { getAPIUrl, baseURL } from '../constants/url.js';

describe('URL Constants', () => {
  it('Create URL', () => {
    const users = 'users'
    const posts = 'posts'
    const id = 1

    expect(getAPIUrl(users)).toEqual(`${baseURL}${users}`)
    expect(getAPIUrl(posts)).toEqual(`${baseURL}${posts}`)
    expect(getAPIUrl(posts, id)).toEqual(`${baseURL}${posts}?userId=${id}`)
  });
});
