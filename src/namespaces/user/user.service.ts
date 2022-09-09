import { injectable } from 'tsyringe'
import { v4 as uuidv4 } from 'uuid'

import { UserRepo } from './user.repo'
import { DataType } from '../../types/response'

@injectable()
export class UserService {
  private readonly userRepo: UserRepo

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  login(email: string): DataType {
    const user = this.userRepo.findUser(email)

    if (!user) {
      return { status: 'error', message: 'Invalid login credentials' }
    }

    const token = uuidv4()

    return {
      status: 'successful',
      message: 'Login successful',
      data: {
        token,
        user
      }
    }
  }

  getAllusers() {
    return this.userRepo.allUsers()
  }
}
