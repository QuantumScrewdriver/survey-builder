Technical Overview
===================

.. note: some of this is untrue as of yet, but what will, for planning purposes

When development is complete and all components needed for a set of experiments
exist, an instance of the apps should be deployed.


A researcher wants to run a study will create an account on that instance
and log in to their account.
The scientist will choose what type of experiment for the given study and then
set the parameters that the experiment requires as required for the specific
hypotheses of the current study.

Instance Contents
-----------------

Within a given instance, multiple researchers may run multiple studies of
varying or repeating experiment types. The experiment types available within an
instance cannot be changed or extended. An instance contains a single database 
with multiple collections.

Access
-------

Across two instances, a researcher would need to maintain separate logins. After
logging in, a researcher can view all of the studies that they have configured.
A research admin or PI can login to an instance and see all of the data from all
studies on an instance as the individual researchers can.
