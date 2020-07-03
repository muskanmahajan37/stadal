use std::sync::{Mutex, Arc, Weak};

pub enum Stadal {
    // TODO: profile startup, and determine what things (such as theme loading)
    // we should be doing before client_init.
    Waiting,
    Running(Arc<Mutex<CoreState>>),
}

/// A weak reference to the main state. This is passed to plugin threads.
#[derive(Clone)]
pub struct WeakStadal(Weak<Mutex<CoreState>>);

#[allow(dead_code)]
impl Stadal {
    pub fn new() -> Self {
        Stadal::Waiting
    }

    /// Returns `true` if the `client_started` has not been received.
    fn is_waiting(&self) -> bool {
        match *self {
            Stadal::Waiting => true,
            _ => false,
        }
    }
}