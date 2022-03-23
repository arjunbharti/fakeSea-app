import '../styles/login-and-signup.css'
import Header from './Header'

const Signup = () => {
  return (
    <>
        <Header />
        <main class="login-page">
            <form class="signup-card flex-column">
                <p class="text-l login-heading">Sign up</p>
                <div class="login-input-field flex-column"> 
                    <label for="first-name" class="name-label">First Name</label> 
                    <input 
                        type="text" 
                        id="first-name" 
                        class="input-class" 
                        placeholder="Enter your first name here" 
                    /> 
                </div> 
                <div class="login-input-field flex-column"> 
                    <label for="last-name" class="name-label">Last Name</label> 
                    <input 
                        type="text" 
                        id="last-name" 
                        class="input-class" 
                        placeholder="Enter your last name here"
                    /> 
                </div>
                <div class="login-input-field flex-column">
                    <label for="email" class="email-label">Email address</label>
                    <input   
                        type="email" 
                        id="email"
                        class="input-class"
                        placeholder="Enter your email here"
                    />
                </div>
                <div class="login-input-field flex-column">
                    <label for="password" class="password-label">Password</label>
                    <input 
                        type="password" 
                        class="input-class"
                        placeholder="Enter your password"
                    />
                </div>
                <a className="btn-login">Sign up</a>
                <Link class="signup-btn" to="/login">Already have an account?  <br />Login Now </Link>
            </form>
        </main>
    </>
  )
}

export default Signup