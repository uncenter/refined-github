import './clean-pinned-issues.css';

import * as pageDetect from 'github-url-detection';

import features from '../feature-manager.js';

void features.addCssFeature(import.meta.url, [pageDetect.isRepoIssueList]);

/*

Test URLs:

https://github.com/refined-github/sandbox/issues
https://github.com/eslint/eslint/issues

*/
