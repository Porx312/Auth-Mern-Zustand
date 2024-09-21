import { StateCreator, create } from 'zustand';
import { AuthService } from '../../services/auth.service';
import { devtools, persist } from 'zustand/middleware';
import { AuthStatus } from '../../interfaces/auth-status.interface';
import { User } from '../../interfaces/user.interface';



export interface AuthState {

  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: ( email: string, password: string ) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  registerUser: ( name: string, email: string, password: string ) => Promise<void>;
  logoutUser: () => void;
}


const storeApi: StateCreator<AuthState> = ( set ) => ( {

  status: 'pending',
  token: undefined,
  user: undefined,


  loginUser: async ( email: string, password: string ) => {


    try {
      const { token, ...userData } = await AuthService.login( email, password );
      const user: User = {
        ...userData,
        fullName: userData.name,
        // Eliminamos la propiedad 'name' ya que no existe en la interfaz User
      };
      set( { status: 'authorized', token, user } );

    } catch ( error ) {

      set( { status: 'unauthorized', token: undefined, user: undefined } );
      throw 'No autorizado';
    }

  },

  checkAuthStatus: async () => {
    try {
      const { token, ...userData } = await AuthService.checkStatus();
      console.log(userData);
      const user: User = {
        ...userData,
        fullName: userData.name,
      };
      set({ status: 'authorized', token, user });
      console.log(token);
    } catch (error) {
      set({ status: 'unauthorized', token: undefined, user: undefined });
      console.error('Error al verificar el estado de autenticación:', error);
    }
  },

  registerUser: async ( name: string, email: string, password: string ) => {

    try {
      const { token, ...userData } = await AuthService.register( name, email, password );
      const user: User = {
        ...userData,
        fullName: userData.name,
      };



      set( { status: 'authorized', token, user } );
    } catch ( error ) {

      set( { status: 'unauthorized', token: undefined, user: undefined } );
      throw 'Error en el registro';
    }
  },
  logoutUser: () => {

    set( { status: 'unauthorized', token: undefined, user: undefined } );
  }

} );


export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      { name: 'auth-storage' }
    )
  )
);