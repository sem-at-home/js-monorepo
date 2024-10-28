import { expect } from 'chai';
import { fetcher } from './flickr-fetcher.js'

describe('FlickrFetcher', function () {
  it('should exist', function() {
    expect(fetcher).to.exist;
  })
  describe('#photoObjToURL', function() {
    it('should take a photo object and return a URL', function() {
      const input = {
        id:       '25373736106',
        owner:    '99117316@N03',
        secret:   '146731fcb7',
        server:   '1669',
        farm:     2,
        title:    'Dog goes to desperate measure to avoid walking on a leash',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      };
      const actual = fetcher.photoObjToURL(input);
      const expected = 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg';

      expect(actual).to.equal(expected);
    })
    it('should take another photo object and return another correct URL', function() {
      const input = {
        id:       '24765033584',
        owner:    '27294864@N02',
        secret:   '3c190c104e',
        server:   '1514',
        farm:     2,
        title:    'the other cate',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      };
      const actual = fetcher.photoObjToURL(input);
      const expected = 'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg';

      expect(actual).to.equal(expected);
    })
  })
})