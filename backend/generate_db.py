from mongo_base import employees, projects

# anger, joy, fear, disgust, sadness
all_employees = [
    {
        'id': 1,
        'name': 'Michael Palin',
        'projects': [1, 3],
        'salary': 120000,
        'sentiment': 'Joy',
        'turnover_risk': 15,
        'emotions': [0.0002, 0.3200, 0.00079, 0.00065, 0.000083],
        'interaction_sentiment': 'Disgust'
    }, {
        'id': 2,
        'name': 'Terry Gilliam',
        'projects': [2],
        'salary': 2400000,
        'sentiment': 'Disgust',
        'turnover_risk': 45,
        'emotions': [0.0002, 0.3200, 0.00079, 0.00065, 0.000083],
        'interaction_sentiment': 'Anger'
    }, {
        'id': 3,
        'name': 'Terry Jones',
        'projects': [3],
        'salary': 130000,
        'sentiment': 'Joy',
        'turnover_risk': 13,
        'emotions': [0.0002, 0.3200, 0.00079, 0.00065, 0.000083],
        'interaction_sentiment': 'Anger'
    }, {
        'id': 4,
        'name': 'John Cleese',
        'projects': [1],
        'salary': 100000,
        'sentiment': 'Anger',
        'turnover_risk': 86,
        'emotions': [0.0002, 0.3200, 0.00079, 0.00065, 0.000083],
        'interaction_sentiment': 'Anger'
    }, {
        'id': 5,
        'name': 'Graham Chapman',
        'projects': [1, 2, 3],
        'salary': 300000,
        'sentiment': 'Sadness',
        'turnover_risk': 50,
        'emotions': [0.0002, 0.3200, 0.00079, 0.00065, 0.000083],
        'interaction_sentiment': 'Joy'
    }]

for employee in all_employees:
    employees.insert_one(employee)

all_projects = [
    {
        'id': 1,
        'name': 'The Holy Grail',
        'members': [1, 4, 5]
    }, {
        'id': 2,
        'name': 'The Dead Parrot Sketch',
        'members': [2, 5]
    }, {
        'id': 3,
        'name': 'Argument Clinic',
        'members': [1, 3, 5]
    }]

for project in all_projects:
    projects.insert_one(project)
