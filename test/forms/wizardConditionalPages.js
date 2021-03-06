export default {
  '_id': '5f47eb138aeb8509a99f61d6',
  'type': 'form',
  'tags': [],
  'owner': '5e7d0c4ddae30a69f1c75eee',
  'components': [
    {
      'title': 'Page 1',
      'label': 'Page 1',
      'type': 'panel',
      'key': 'page1',
      'components': [
        {
          'label': 'A',
          'tableView': false,
          'key': 'a',
          'type': 'checkbox',
          'input': true,
          'defaultValue': false
        }
      ],
      'input': false,
      'tableView': false
    },
    {
      'title': 'Page 2',
      'label': 'Page 2',
      'type': 'panel',
      'key': 'page2',
      'components': [
        {
          'label': 'B',
          'tableView': true,
          'key': 'b',
          'type': 'textfield',
          'input': true
        }
      ],
      'input': false,
      'tableView': false
    },
    {
      'title': 'Page 3',
      'breadcrumbClickable': true,
      'buttonSettings': {
        'previous': true,
        'cancel': true,
        'next': true
      },
      'collapsible': false,
      'tableView': false,
      'key': 'page3',
      'conditional': {
        'show': true,
        'when': 'a',
        'eq': 'true'
      },
      'type': 'panel',
      'label': 'Page 3',
      'components': [
        {
          'label': 'C',
          'tableView': true,
          'key': 'c',
          'type': 'textfield',
          'input': true
        }
      ],
      'input': false
    }
  ],
  'revisions': '',
  '_vid': 0,
  'title': 'Conditional Wizard Test',
  'display': 'wizard',
  'access': [
    {
      'roles': [
        '5f47eadc8aeb8509a99f61b6',
        '5f47eadc8aeb8509a99f61b7',
        '5f47eadc8aeb8509a99f61b8'
      ],
      'type': 'read_all'
    }
  ],
  'submissionAccess': [],
  'controller': '',
  'properties': {},
  'settings': {},
  'name': 'conditionalWizardTest',
  'path': 'conditionalwizardtest',
  'project': '5f47eadc8aeb8509a99f61b5',
  'created': '2020-08-27T17:19:15.128Z',
  'modified': '2020-08-27T17:19:15.131Z',
  'machineName': 'ywvqkdghljvoegd:conditionalWizardTest'
};
