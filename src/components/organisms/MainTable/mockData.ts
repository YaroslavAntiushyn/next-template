export interface UserData {
  id: string
  name: string
  age: number
  city: string
  [key: string]: string | number
}

export const mockData: UserData[] = [
  { id: '1', name: 'John', age: 30, city: 'New York' },
  { id: '2', name: 'Jane', age: 25, city: 'Los Angeles' },
  { id: '3', name: 'Doe', age: 40, city: 'Chicago' },
  { id: '4', name: 'Mike', age: 35, city: 'San Antonio' },
  { id: '5', name: 'Ashley', age: 28, city: 'Dallas' },
  { id: '6', name: 'Robert', age: 32, city: 'San Jose' },
  { id: '7', name: 'Mary', age: 27, city: 'Phoenix' },
  { id: '8', name: 'David', age: 41, city: 'Philadelphia' },
  { id: '9', name: 'Sarah', age: 36, city: 'Houston' },
  { id: '10', name: 'James', age: 30, city: 'New York' },
  { id: '11', name: 'Emily', age: 29, city: 'Miami' },
  { id: '12', name: 'Daniel', age: 33, city: 'Seattle' },
  { id: '13', name: 'Jessica', age: 26, city: 'San Diego' },
  { id: '14', name: 'Ryan', age: 37, city: 'Boston' },
  { id: '15', name: 'Amanda', age: 31, city: 'Atlanta' },
  { id: '16', name: 'Mark', age: 34, city: 'Portland' },
  { id: '17', name: 'Linda', age: 45, city: 'Denver' },
  { id: '18', name: 'Chris', age: 39, city: 'Austin' },
  { id: '19', name: 'Jennifer', age: 32, city: 'Las Vegas' },
  { id: '20', name: 'Matthew', age: 28, city: 'San Francisco' },
  { id: '21', name: 'Elizabeth', age: 36, city: 'Charlotte' },
  { id: '22', name: 'Kevin', age: 29, city: 'Detroit' },
  { id: '23', name: 'Stephanie', age: 31, city: 'Nashville' },
  { id: '24', name: 'Justin', age: 27, city: 'Orlando' },
  { id: '25', name: 'Nicole', age: 38, city: 'Minneapolis' },
  { id: '26', name: 'Andrew', age: 33, city: 'Tampa' },
  { id: '27', name: 'Megan', age: 42, city: 'Salt Lake City' },
  { id: '28', name: 'Joshua', age: 30, city: 'Kansas City' },
  { id: '29', name: 'Brittany', age: 35, city: 'Memphis' },
  { id: '30', name: 'Brandon', age: 26, city: 'Raleigh' },
  { id: '31', name: 'Lauren', age: 40, city: 'Indianapolis' },
  { id: '32', name: 'Michael', age: 37, city: 'Columbus' },
  { id: '33', name: 'Kimberly', age: 34, city: 'Milwaukee' },
  { id: '34', name: 'Kyle', age: 29, city: 'Albuquerque' },
  { id: '35', name: 'Melissa', age: 44, city: 'Portland' },
  { id: '36', name: 'Adam', age: 30, city: 'Oklahoma City' },
  { id: '37', name: 'Tiffany', age: 27, city: 'Louisville' },
  { id: '38', name: 'Jason', age: 35, city: 'Omaha' },
  { id: '39', name: 'Samantha', age: 32, city: 'Hartford' },
  { id: '40', name: 'Brian', age: 39, city: 'Providence' },
  { id: '41', name: 'Rachel', age: 28, city: 'Jacksonville' },
  { id: '42', name: 'Alexander', age: 31, city: 'Boise' },
  { id: '43', name: 'Katherine', age: 36, city: 'Anchorage' },
  { id: '44', name: 'Jeffrey', age: 33, city: 'Honolulu' },
  { id: '45', name: 'Cassandra', age: 30, city: 'Des Moines' },
  { id: '46', name: 'Jonathan', age: 45, city: 'Little Rock' },
  { id: '47', name: 'Christina', age: 29, city: 'Montgomery' },
  { id: '48', name: 'Timothy', age: 34, city: 'Pierre' },
  { id: '49', name: 'Heather', age: 31, city: 'Columbia' },
  { id: '50', name: 'Patrick', age: 38, city: 'Tallahassee' },
  { id: '51', name: 'Christine', age: 27, city: 'Richmond' },
  { id: '52', name: 'Peter', age: 36, city: 'Sacramento' },
  { id: '53', name: 'Alyssa', age: 29, city: 'Harrisburg' },
  { id: '54', name: 'Nathan', age: 31, city: 'Dover' },
  { id: '55', name: 'Vanessa', age: 33, city: 'Hartford' },
  { id: '56', name: 'Tyler', age: 30, city: 'Trenton' },
  { id: '57', name: 'Danielle', age: 28, city: 'Concord' },
  { id: '58', name: 'Benjamin', age: 35, city: 'Albany' },
  { id: '59', name: 'Victoria', age: 32, city: 'Boston' },
  { id: '60', name: 'Steven', age: 34, city: 'Augusta' },
  { id: '61', name: 'Alexandra', age: 26, city: 'Montpelier' },
  { id: '62', name: 'Jared', age: 37, city: 'Annapolis' },
  { id: '63', name: 'Hannah', age: 29, city: 'Hartford' },
  { id: '64', name: 'Ethan', age: 30, city: 'Providence' },
  { id: '65', name: 'Allison', age: 31, city: 'Richmond' },
  { id: '66', name: 'Gregory', age: 33, city: 'Trenton' },
  { id: '67', name: 'Courtney', age: 28, city: 'Harrisburg' },
  { id: '68', name: 'Jordan', age: 32, city: 'Dover' },
  { id: '69', name: 'Erica', age: 35, city: 'Concord' },
  { id: '70', name: 'Dylan', age: 27, city: 'Montpelier' },
  { id: '71', name: 'Megan', age: 34, city: 'Albany' },
  { id: '72', name: 'Bryan', age: 30, city: 'Boston' },
  { id: '73', name: 'Monica', age: 31, city: 'Augusta' },
  { id: '74', name: 'Kyle', age: 29, city: 'Annapolis' },
  { id: '75', name: 'Jamie', age: 33, city: 'Hartford' },
  { id: '76', name: 'Trevor', age: 28, city: 'Providence' },
  { id: '77', name: 'Kaitlyn', age: 32, city: 'Richmond' },
  { id: '78', name: 'Keith', age: 35, city: 'Trenton' },
  { id: '79', name: 'Samantha', age: 27, city: 'Harrisburg' },
  { id: '80', name: 'Shawn', age: 30, city: 'Dover' },
  { id: '81', name: 'Katherine', age: 36, city: 'Concord' },
  { id: '82', name: 'Cody', age: 29, city: 'Montpelier' },
  { id: '83', name: 'Amanda', age: 34, city: 'Albany' },
  { id: '84', name: 'Justin', age: 31, city: 'Boston' },
  { id: '85', name: 'Paige', age: 33, city: 'Augusta' },
  { id: '86', name: 'Jesse', age: 28, city: 'Annapolis' },
  { id: '87', name: 'Lindsay', age: 32, city: 'Hartford' },
  { id: '88', name: 'Andrew', age: 35, city: 'Providence' },
  { id: '89', name: 'Chelsea', age: 27, city: 'Richmond' },
  { id: '90', name: 'Blake', age: 30, city: 'Trenton' },
  { id: '91', name: 'Caroline', age: 36, city: 'Harrisburg' },
  { id: '92', name: 'Travis', age: 29, city: 'Dover' },
  { id: '93', name: 'Morgan', age: 34, city: 'Concord' },
  { id: '94', name: 'Logan', age: 31, city: 'Montpelier' },
  { id: '95', name: 'Erin', age: 33, city: 'Albany' },
  { id: '96', name: 'Mitchell', age: 28, city: 'Boston' },
  { id: '97', name: 'Laura', age: 32, city: 'Augusta' },
  { id: '98', name: 'Alan', age: 35, city: 'Annapolis' },
  { id: '99', name: 'Bethany', age: 27, city: 'Hartford' },
  { id: '100', name: 'Derek', age: 30, city: 'Providence' },
  { id: '101', name: 'Alex', age: 29, city: 'Seattle' },
  { id: '102', name: 'Holly', age: 31, city: 'Portland' },
  { id: '103', name: 'Evan', age: 27, city: 'San Francisco' },
  { id: '104', name: 'Kayla', age: 33, city: 'Los Angeles' },
  { id: '105', name: 'Connor', age: 28, city: 'San Diego' },
  { id: '106', name: 'Hailey', age: 30, city: 'Las Vegas' },
  { id: '107', name: 'Jesse', age: 32, city: 'Denver' },
  { id: '108', name: 'Brittany', age: 29, city: 'Miami' },
  { id: '109', name: 'Caleb', age: 31, city: 'Orlando' },
  { id: '110', name: 'Sara', age: 27, city: 'Atlanta' },
  { id: '111', name: 'Zachary', age: 33, city: 'Dallas' },
  { id: '112', name: 'Leah', age: 28, city: 'Houston' },
  { id: '113', name: 'Bryan', age: 30, city: 'Chicago' },
  { id: '114', name: 'Kelsey', age: 32, city: 'Boston' },
  { id: '115', name: 'Jared', age: 29, city: 'Philadelphia' },
  { id: '116', name: 'Courtney', age: 31, city: 'Washington D.C.' },
  { id: '117', name: 'Kyle', age: 27, city: 'San Antonio' },
  { id: '118', name: 'Heather', age: 33, city: 'Austin' },
  { id: '119', name: 'Justin', age: 28, city: 'Phoenix' },
  { id: '120', name: 'Hannah', age: 30, city: 'Seattle' },
  { id: '121', name: 'Brandon', age: 32, city: 'Portland' },
  { id: '122', name: 'Amanda', age: 29, city: 'San Francisco' },
  { id: '123', name: 'Tyler', age: 31, city: 'Los Angeles' },
  { id: '124', name: 'Rachel', age: 27, city: 'San Diego' },
  { id: '125', name: 'Dylan', age: 33, city: 'Las Vegas' },
  { id: '126', name: 'Megan', age: 28, city: 'Denver' },
  { id: '127', name: 'Cody', age: 30, city: 'Miami' },
  { id: '128', name: 'Alexis', age: 32, city: 'Orlando' },
  { id: '129', name: 'Joshua', age: 29, city: 'Atlanta' },
  { id: '130', name: 'Emily', age: 31, city: 'Dallas' },
  { id: '131', name: 'Nathan', age: 27, city: 'Houston' },
  { id: '132', name: 'Sarah', age: 33, city: 'Chicago' },
  { id: '133', name: 'Matthew', age: 28, city: 'Boston' },
  { id: '134', name: 'Katie', age: 30, city: 'Philadelphia' },
  { id: '135', name: 'Christopher', age: 32, city: 'Washington D.C.' },
  { id: '136', name: 'Lauren', age: 29, city: 'San Antonio' },
  { id: '137', name: 'Nicholas', age: 31, city: 'Austin' },
  { id: '138', name: 'Taylor', age: 27, city: 'Phoenix' },
  { id: '139', name: 'Madison', age: 33, city: 'Seattle' },
  { id: '140', name: 'Jacob', age: 28, city: 'Portland' },
  { id: '141', name: 'Stephanie', age: 30, city: 'San Francisco' },
  { id: '142', name: 'Andrew', age: 32, city: 'Los Angeles' },
  { id: '143', name: 'Jessica', age: 29, city: 'San Diego' },
  { id: '144', name: 'Austin', age: 31, city: 'Las Vegas' },
  { id: '145', name: 'Lindsay', age: 27, city: 'Denver' },
  { id: '146', name: 'Ryan', age: 33, city: 'Miami' },
  { id: '147', name: 'Paige', age: 28, city: 'Orlando' },
  { id: '148', name: 'Jordan', age: 30, city: 'Atlanta' },
  { id: '149', name: 'Samantha', age: 32, city: 'Dallas' },
  { id: '150', name: 'Daniel', age: 29, city: 'Houston' },
  { id: '151', name: 'Ashley', age: 31, city: 'Chicago' },
  { id: '152', name: 'Justin', age: 27, city: 'Boston' },
  { id: '153', name: 'Kelly', age: 33, city: 'Philadelphia' },
  { id: '154', name: 'Robert', age: 28, city: 'Washington D.C.' },
  { id: '155', name: 'Kaitlyn', age: 30, city: 'San Antonio' },
  { id: '156', name: 'Tyler', age: 32, city: 'Austin' },
  { id: '157', name: 'Haley', age: 29, city: 'Phoenix' },
  { id: '158', name: 'Eric', age: 31, city: 'Seattle' },
  { id: '159', name: 'Brittney', age: 27, city: 'Portland' },
  { id: '160', name: 'Timothy', age: 33, city: 'San Francisco' },
  { id: '161', name: 'Hannah', age: 28, city: 'Los Angeles' },
  { id: '162', name: 'Jonathan', age: 30, city: 'San Diego' },
  { id: '163', name: 'Morgan', age: 32, city: 'Las Vegas' },
  { id: '164', name: 'Julia', age: 29, city: 'Denver' },
  { id: '165', name: 'Austin', age: 31, city: 'Miami' },
  { id: '166', name: 'Nicole', age: 27, city: 'Orlando' },
  { id: '167', name: 'Brandon', age: 33, city: 'Atlanta' },
  { id: '168', name: 'Kristen', age: 28, city: 'Dallas' },
  { id: '169', name: 'Michael', age: 30, city: 'Houston' },
  { id: '170', name: 'Stephanie', age: 32, city: 'Chicago' },
  { id: '171', name: 'Jacob', age: 29, city: 'Boston' },
  { id: '172', name: 'Alexis', age: 31, city: 'Philadelphia' },
  { id: '173', name: 'Matthew', age: 27, city: 'Washington D.C.' },
  { id: '174', name: 'Emily', age: 33, city: 'San Antonio' },
  { id: '175', name: 'Brittany', age: 28, city: 'Austin' },
  { id: '176', name: 'Andrew', age: 30, city: 'Phoenix' },
  { id: '177', name: 'Melissa', age: 32, city: 'Seattle' },
  { id: '178', name: 'Steven', age: 29, city: 'Portland' },
  { id: '179', name: 'Kayla', age: 31, city: 'San Francisco' },
  { id: '180', name: 'Nicholas', age: 27, city: 'Los Angeles' },
  { id: '181', name: 'Lauren', age: 33, city: 'San Diego' },
  { id: '182', name: 'Tyler', age: 28, city: 'Las Vegas' },
  { id: '183', name: 'Samantha', age: 30, city: 'Denver' },
  { id: '184', name: 'John', age: 32, city: 'Miami' },
  { id: '185', name: 'Megan', age: 29, city: 'Orlando' },
  { id: '186', name: 'Ryan', age: 31, city: 'Atlanta' },
  { id: '187', name: 'Rachel', age: 27, city: 'Dallas' },
  { id: '188', name: 'Kyle', age: 33, city: 'Houston' },
  { id: '189', name: 'Emily', age: 28, city: 'Chicago' },
  { id: '190', name: 'David', age: 30, city: 'Boston' },
  { id: '191', name: 'Jessica', age: 32, city: 'Philadelphia' },
  { id: '192', name: 'Daniel', age: 29, city: 'Washington D.C.' },
  { id: '193', name: 'Ashley', age: 31, city: 'San Antonio' },
  { id: '194', name: 'Michael', age: 27, city: 'Austin' },
  { id: '195', name: 'Amanda', age: 33, city: 'Phoenix' },
  { id: '196', name: 'Matthew', age: 28, city: 'Seattle' },
  { id: '197', name: 'Emily', age: 30, city: 'Portland' },
  { id: '198', name: 'Zachary', age: 32, city: 'San Francisco' },
  { id: '199', name: 'Brittany', age: 29, city: 'Los Angeles' },
  { id: '200', name: 'Brandon', age: 31, city: 'San Diego' }
]