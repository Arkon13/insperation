export default class ApiService {
    _apiBase = 'http://lordar01.z2t.testforhost.com/inspiration/wp-json/wp/v2';

    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
    async getAllAlbums() {
        const res = await this.getResource(`/categories/`)
        return res.map(this._transformAlbum);
    }
    async getAllSong(id) {
        const res = await this.getResource(`/posts?categories=${id}`)
        return res;
    }
    getSong(id) {
        return this.getResource(`/post/${id}`)
    }
    _transformAlbum(album) {
        return {
            name: album.name,
            count: album.count,
            id: album.id
        }
    }
    _transformSong() {
        return {

        }
    }
 }
