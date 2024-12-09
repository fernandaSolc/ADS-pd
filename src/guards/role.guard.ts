import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly role: string) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Usuário não autenticado.');
    }

    // Verifique a role do usuário (presumindo que a role seja atribuída com base no email ou banco de dados)
    if (user.role !== this.role) {
      throw new ForbiddenException('Acesso negado.');
    }

    return true;
  }
}
