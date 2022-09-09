export class UserRepo {
  private allUsersData = [
    {
      _id: 1,
      fname: 'Chilaka',
      lname: 'Chinedu',
      email: 'chilaksman@gmail.com'
    },
    {
      _id: 2,
      fname: 'Ini',
      lname: 'Lilian',
      email: 'inilily@gmail.com'
    },
    {
      _id: 3,
      fname: 'Oj',
      lname: 'IK',
      email: 'oj_ik123456@gmail.com'
    }
  ]

  allUsers() {
    return this.allUsersData
  }

  findById(id: number) {
    return this.allUsersData.find((user) => user._id === id)
  }

  findUser(email: string) {
    return this.allUsersData.find((user) => user.email === email)
  }
}
