import { readFileSync } from 'fs';

export default {
  list: {
    intro: {
      title: 'Introduction',
      description: 'Introduction to Caffeinated Tutorials',
      content: readFileSync(`${__dirname}/intro.md`, 'utf-8'),
    },
    limit: {
      title: 'Limit',
      description: 'Introduction to Limit',
      content: readFileSync(`${__dirname}/limit.md`, 'utf-8'),
    },
    limit_thm: {
      title: 'Computation rules of limits',
      description: 'Computation rules and proofs',
      content: readFileSync(`${__dirname}/limit_thm.md`, 'utf-8'),
    },
  },
};
